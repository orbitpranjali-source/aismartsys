import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image as ImageIcon, Sparkles, Download, RefreshCw, Layers, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { usePromptProcessor } from "@/hooks/usePromptProcessor";

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [resultImage, setResultImage] = useState<string | null>(null);
    const { processPrompt, isProcessing } = usePromptProcessor();

    const handleGenerate = async () => {
        if (!prompt) {
            toast.error("Please enter an image prompt");
            return;
        }
        setIsGenerating(true);

        // Process prompt through AI refinement
        const refinedPrompt = await processPrompt(prompt, "AI image generator - user wants to generate an image matching this description");

        // Simulate Image Generation with Unsplash
        setTimeout(() => {
            setResultImage(`https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800&sig=${Math.random()}`);
            setIsGenerating(false);
            toast.success("AI Image Generated!");
        }, 2000);
    };

    const busy = isGenerating || isProcessing;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="premium-card p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <ImageIcon size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-heading font-bold">AI Image Generator</h2>
                        <p className="text-muted-foreground text-sm">Turn your imagination into high-quality visuals.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <Layers size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="A futuristic cybernetic city with neon lights and flying cars..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="bg-muted/30 border-white/5 h-14 pl-12 pr-4 rounded-xl text-lg focus:ring-accent/20"
                        />
                    </div>
                    <Button
                        onClick={handleGenerate}
                        disabled={busy}
                        className="h-14 px-8 bg-gradient-button text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-[1.02]"
                    >
                        {busy ? (
                            <RefreshCw size={20} className="animate-spin" />
                        ) : (
                            <>
                                <Sparkles size={18} className="mr-2" /> Generate
                            </>
                        )}
                    </Button>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
                    <Wand2 size={10} /> Smart prompt processing enabled — typos and short phrases are auto-corrected
                </p>
            </div>

            <div className="glass border-white/5 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center relative bg-black/20">
                {!resultImage && !busy ? (
                    <div className="text-center opacity-30 select-none">
                        <ImageIcon size={64} className="mx-auto mb-4" />
                        <p className="text-xl">Your creation will appear here</p>
                    </div>
                ) : busy ? (
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                        <p className="text-muted-foreground animate-pulse font-medium tracking-widest uppercase text-xs">
                            {isProcessing ? "Refining your prompt..." : "AI is painting..."}
                        </p>
                    </div>
                ) : (
                    <div className="w-full relative animate-fade-in group">
                        <img
                            src={resultImage!}
                            alt="AI Generated"
                            className="w-full h-auto max-h-[600px] object-contain block mx-auto transition-transform duration-700 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                            <Button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 rounded-xl px-10 py-6 h-auto">
                                <Download size={20} className="mr-2" /> Download Original
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageGenerator;
