import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { usePromptProcessor } from "@/hooks/usePromptProcessor";

const CaptionGenerator = () => {
    const [topic, setTopic] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [captions, setCaptions] = useState<string[]>([]);
    const { processPrompt, isProcessing } = usePromptProcessor();

    const generateCaptions = async () => {
        if (!topic) {
            toast.error("Please enter a topic");
            return;
        }
        setIsGenerating(true);

        // Process prompt through AI refinement
        const refinedTopic = await processPrompt(topic, "social media caption generator - user wants captions about this topic");

        // Simulate AI generation with refined prompt
        setTimeout(() => {
            const results = [
                `Unlock the power of ${refinedTopic} with our latest AI solutions! 🚀 #AI #Innovation #Future`,
                `${refinedTopic} is changing the world as we know it. Are you ready? 🌍✨ #TechTrends #AI`,
                "Smart tools for smart people. Deep dive into the world of " + refinedTopic + ". 🧠💡",
                `Efficiency meets intelligence. Experience the best of ${refinedTopic} today. ⚡💻`
            ];
            setCaptions(results);
            setIsGenerating(false);
            toast.success("Captions generated!");
        }, 1500);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    };

    const busy = isGenerating || isProcessing;

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
                            placeholder="e.g. Artificial Intelligence in modern healthcare"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="bg-muted/30 border-white/5 h-12"
                        />
                        <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                            <Wand2 size={10} /> Smart prompt processing enabled — typos and short phrases are auto-corrected
                        </p>
                    </div>
                    <Button
                        onClick={generateCaptions}
                        disabled={busy}
                        className="w-full bg-gradient-primary hover:opacity-90 h-12 font-semibold"
                    >
                        {busy ? (
                            <>
                                <RefreshCw size={18} className="mr-2 animate-spin" /> {isProcessing ? "Processing prompt..." : "Generating..."}
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
