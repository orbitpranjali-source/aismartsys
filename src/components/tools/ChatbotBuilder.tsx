import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User, Sparkles, MessageSquare, Trash2, Wand2 } from "lucide-react";
import { usePromptProcessor } from "@/hooks/usePromptProcessor";

interface Message {
    id: string;
    text: string;
    sender: "user" | "ai";
    timestamp: Date;
}

const ChatbotBuilder = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hello! I'm your AI assistant. How can I help you today?",
            sender: "ai",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { processPrompt, isProcessing } = usePromptProcessor();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim() || isProcessing) return;

        const originalInput = inputValue;
        setInputValue("");

        // Process prompt through AI refinement
        const refinedInput = await processPrompt(originalInput, "AI chatbot conversation - user is chatting with an assistant");

        const userMessage: Message = {
            id: Date.now().toString(),
            text: refinedInput,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getAIResponse(refinedInput),
                sender: "ai",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getAIResponse = (input: string) => {
        const lowInput = input.toLowerCase();
        if (lowInput.includes("hello") || lowInput.includes("hi")) return "Hi there! How's your day going?";
        if (lowInput.includes("price") || lowInput.includes("cost")) return "Our AI SmartSyS subscription starts at $29/month. Would you like to see the full pricing list?";
        if (lowInput.includes("portfolio")) return "You can check our recent projects in the Portfolio section of the landing page!";
        return "That's an interesting question! As an AI assistant from SmartSyS, I'm constantly learning to provide better answers. Can you tell me more?";
    };

    const clearChat = () => {
        setMessages([
            {
                id: "1",
                text: "Chat cleared. How else can I assist you?",
                sender: "ai",
                timestamp: new Date()
            }
        ]);
    };

    const busy = isTyping || isProcessing;

    return (
        <div className="max-w-4xl mx-auto h-[700px] flex flex-col">
            <div className="premium-card flex-1 flex flex-col overflow-hidden">
                {/* Chat Header */}
                <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Bot size={20} />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg">Smart Assistant</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Online</span>
                            </div>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={clearChat} className="text-muted-foreground hover:text-red-400">
                        <Trash2 size={18} />
                    </Button>
                </div>

                {/* Messages Area */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`flex gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
                                    }`}>
                                    {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                                </div>
                                <div className={`p-4 rounded-2xl ${msg.sender === "user"
                                        ? "bg-gradient-primary text-white rounded-tr-none"
                                        : "glass border-white/5 text-foreground rounded-tl-none"
                                    }`}>
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                    <p className="text-[10px] mt-2 opacity-50 font-medium">
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {(isTyping || isProcessing) && (
                        <div className="flex justify-start">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                    {isProcessing ? <Wand2 size={16} /> : <Bot size={16} />}
                                </div>
                                <div className="glass border-white/5 p-4 rounded-2xl flex items-center gap-2">
                                    {isProcessing ? (
                                        <span className="text-xs text-muted-foreground animate-pulse">Refining your message...</span>
                                    ) : (
                                        <>
                                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-white/5 bg-white/5">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="relative flex items-center gap-3"
                    >
                        <div className="relative flex-1">
                            <MessageSquare size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Ask me anything..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="bg-background/40 border-white/5 h-14 pl-12 pr-4 rounded-xl focus:ring-primary/20"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="h-14 w-14 rounded-xl bg-gradient-button flex items-center justify-center p-0 shadow-lg shadow-primary/20 hover:scale-105"
                            disabled={!inputValue.trim() || busy}
                        >
                            <Send size={20} className="text-white" />
                        </Button>
                    </form>
                    <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                        <Sparkles size={10} className="text-primary" /> AI SmartSyS NLP Core Engine v2.0 · <Wand2 size={10} /> Smart Prompt Processing
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotBuilder;
