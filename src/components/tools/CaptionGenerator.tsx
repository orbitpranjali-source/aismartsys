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
        if (!topic) {
            toast.error("Please enter a topic");
            return;
        }
        setIsGenerating(true);
        // Simulate AI generation
        setTimeout(() => {
            const lowercaseTopic = topic.toLowerCase();
            let results: string[] = [];

            if (lowercaseTopic.includes("summer") || lowercaseTopic.includes("vacation") || lowercaseTopic.includes("beach")) {
                results = [
                    "Sun, sand, and endless summer vibes 🌞🏖️ #SummerMood",
                    "Chasing sunshine and making memories 🌊✨ #VacationMode",
                    "Good vibes and tan lines ☀️😎 #SummerDays",
                    "Life feels better under the summer sun 🌴🌺 #TravelDiaries",
                    "Saltwater cures everything. Ready for another adventure! 🐚✈️ #Wanderlust",
                    "Tropic like it's hot 🔥🍹 #SummerNights",
                    "Catching rays and making waves 🌊🏄‍♀️ #BeachLife",
                    "Sunshine on my mind and sand between my toes 🏖️☀️ #SummerVibes"
                ];
            } else if (lowercaseTopic.includes("travel") || lowercaseTopic.includes("photo") || lowercaseTopic.includes("trip")) {
                results = [
                    "Collecting moments, not things 🌍📸 #TravelGram",
                    "Out of office. Catch me if you can! ✈️🗺️ #Wanderlust",
                    "Exploring new places and finding myself along the way 🎒✨ #AdventureTime",
                    "Passport stamps and beautiful sights 🌅🏰 #GlobeTrotter",
                    "Life is short and the world is wide. Let's go! 🚀🌎 #Explorer",
                    "Jet lag, but make it aesthetic ✈️💫 #TravelDiaries",
                    "To travel is to live ✨🌿 #Wanderlust",
                    "Finding paradise wherever I go 🌴🗺️ #TravelPhotography"
                ];
            } else if (lowercaseTopic.includes("coffee") || lowercaseTopic.includes("morning") || lowercaseTopic.includes("cafe") || lowercaseTopic.includes("breakfast")) {
                results = [
                    "Starting the day right, one cup at a time ☕✨ #MorningVibes",
                    "But first, coffee. The rest can wait 🥐🤎 #CoffeeLover",
                    "A little caffeine and a lot of dreams 🌟☕ #DailyGrind",
                    "Sipping on moments of peace before the day begins 🪴📖 #MorningRoutine",
                    "Espresso yourself! Good days start like this ☕💫 #CafeDiaries",
                    "Coffee: my love language ❤️☕ #CoffeeTime",
                    "Waking up and smelling the coffee 🌅☕ #MorningMotivation",
                    "A perfect blend of cozy and caffeinated 🤎✨ #CafeVibes"
                ];
            } else if (lowercaseTopic.includes("gym") || lowercaseTopic.includes("workout") || lowercaseTopic.includes("fitness") || lowercaseTopic.includes("health")) {
                results = [
                    "Pushing limits and breaking boundaries 💪🔥 #FitnessMotivation",
                    "Sweat today, shine tomorrow 🏋️‍♀️✨ #GymLife",
                    "Stronger than yesterday. Let's get it! 🏃‍♂️💥 #Workout",
                    "Excuses don't burn calories. Time to hustle 💯👟 #FitFam",
                    "Fueling the body and the mind 🥗🧘‍♀️ #HealthJourney",
                    "Gains don't happen by accident 💪🚀 #FitLife",
                    "Sore today, strong tomorrow 🏋️‍♂️💯 #NoExcuses",
                    "Trust the process and put in the work 🔥🏅 #Fitness"
                ];
            } else if (lowercaseTopic.includes("work") || lowercaseTopic.includes("business") || lowercaseTopic.includes("office") || lowercaseTopic.includes("marketing")) {
                results = [
                    "Making things happen and chasing goals 💼🌟 #Hustle",
                    "Another day, another opportunity to grow 📈✨ #BusinessMindset",
                    "Focused on the vision and trusting the process 🚀🎯 #Entrepreneur",
                    "Turning dreams into plans, and plans into reality 💡📊 #Success",
                    "Building something meaningful today! 🛠️💼 #WorkGrind",
                    "Innovate, create, inspire 🌟💡 #Leadership",
                    "Teamwork makes the dream work 🤝✨ #OfficeLife",
                    "Stay focused, stay driven 🚀📈 #Marketing"
                ];
            } else if (lowercaseTopic.includes("food") || lowercaseTopic.includes("dinner") || lowercaseTopic.includes("lunch") || lowercaseTopic.includes("eat")) {
                results = [
                    "Good food, good mood 🍔✨ #Foodie",
                    "Eating my way through the day 🍕🤤 #FoodLover",
                    "Everything tastes better when you share it 🥘🥂 #FoodPhotography",
                    "A feast for the eyes and the stomach! 🍝❤️ #Delicious",
                    "First we eat, then we do everything else 🥗😋 #Foodstagram",
                    "Counting memories, not calories 🍰🎉 #DessertFirst",
                    "Flavors that speak for themselves 🌶️🍽️ #Gourmet",
                    "Love at first bite 🍔🍟 #FoodBlogger"
                ];
            } else {
                const cleanTopic = topic.trim().replace(/[^a-zA-Z0-9 ]/g, "");
                const words = cleanTopic.split(" ").filter(w => w.length > 0);
                const camelCaseHashtag = words.length > 0
                    ? "#" + words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("")
                    : "#Vibes";

                results = [
                    `Bringing my vision to life, one step at a time! ✨🚀 ${camelCaseHashtag}`,
                    `Absolutely obsessed with this right now! What do you guys think? 😍💡 ${camelCaseHashtag}`,
                    `Good energy, great moments, and endless inspiration 🌟🔥 ${camelCaseHashtag}`,
                    `Some things are just too good not to share with the world 📸✨ ${camelCaseHashtag}`,
                    `Embracing every single moment of this journey ❤️💯 ${camelCaseHashtag}`,
                    `Chasing dreams and making them reality 💫✨ ${camelCaseHashtag}`,
                    `Living my best life right here, right now 🌟🔥 ${camelCaseHashtag}`,
                    `A little bit of magic in every day 🪄✨ ${camelCaseHashtag}`
                ];
            }

            setCaptions(results);
            setIsGenerating(false);
            toast.success("Captions generated!");
        }, 1500);
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
