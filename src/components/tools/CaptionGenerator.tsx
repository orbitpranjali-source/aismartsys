import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CaptionGenerator = () => {
    const [topic, setTopic] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [captions, setCaptions] = useState<string[]>([]);

    const generateCaptions = async () => {
        if (!topic.trim()) {
            toast.error("Please enter a topic");
            return;
        }
        setIsGenerating(true);

        try {
            const { data, error } = await supabase.functions.invoke("generate-captions", {
                body: { topic: topic.trim() },
            });

            if (error) {
                console.error("Caption generation error:", error);
                toast.error("Failed to generate captions. Please try again.");
                return;
            }

            if (data?.captions && Array.isArray(data.captions)) {
                setCaptions(data.captions);
                toast.success(`${data.captions.length} captions generated!`);
            } else {
                toast.error("Unexpected response format");
            }
        } catch (err) {
            console.error("Caption generator failed:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="premium-card p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Brain size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-heading font-bold">AI Caption Generator</h2>
                        <p className="text-muted-foreground text-sm">Create engaging social media content in seconds.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium mb-2 block">What is your post about?</label>
                        <Input
                            placeholder="e.g. summer vacation, coffee morning, travel photo..."
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !isGenerating && generateCaptions()}
                            className="bg-muted/30 border-white/5 h-12"
                        />
                        <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                            <Wand2 size={10} /> AI-powered — typos and short phrases are understood automatically
                        </p>
                    </div>
                    <Button
                        onClick={generateCaptions}
                        disabled={isGenerating}
                        className="w-full bg-gradient-primary hover:opacity-90 h-12 font-semibold"
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw size={18} className="mr-2 animate-spin" /> Generating captions...
                            </>
                        ) : (
                            <>
                                <Sparkles size={18} className="mr-2" /> Generate Captions
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {captions.length > 0 && (
                <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-heading font-semibold px-2">Results</h3>
                    {captions.map((caption, i) => (
                        <div key={i} className="glass border-white/5 p-6 rounded-2xl group relative hover:border-primary/20 transition-colors">
                            <p className="text-foreground leading-relaxed pr-12">{caption}</p>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => copyToClipboard(caption)}
                                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                            >
                                <Copy size={18} />
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CaptionGenerator;
