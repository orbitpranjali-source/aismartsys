import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Sparkles, Download, User, Briefcase, GraduationCap, Code, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { usePromptProcessor } from "@/hooks/usePromptProcessor";

const ResumeBuilder = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        summary: "",
        experience: "",
        education: "",
        skills: ""
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [resumeData, setResumeData] = useState<typeof form | null>(null);
    const { processPrompt, isProcessing } = usePromptProcessor();

    const handleGenerate = async () => {
        if (!form.name || !form.email) {
            toast.error("Please fill in at least Name and Email");
            return;
        }
        setIsGenerating(true);

        // Process text fields through AI refinement
        const [refinedSummary, refinedExperience, refinedEducation, refinedSkills] = await Promise.all([
            form.summary ? processPrompt(form.summary, "professional resume summary section") : Promise.resolve(form.summary),
            form.experience ? processPrompt(form.experience, "resume work experience section") : Promise.resolve(form.experience),
            form.education ? processPrompt(form.education, "resume education section") : Promise.resolve(form.education),
            form.skills ? processPrompt(form.skills, "resume skills list") : Promise.resolve(form.skills),
        ]);

        const refined = {
            ...form,
            summary: refinedSummary,
            experience: refinedExperience,
            education: refinedEducation,
            skills: refinedSkills,
        };

        setTimeout(() => {
            setResumeData(refined);
            setIsGenerating(false);
            toast.success("Resume preview generated!");
        }, 500);
    };

    const busy = isGenerating || isProcessing;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <div className="premium-card p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-heading font-bold">AI Resume Builder</h2>
                            <p className="text-muted-foreground text-sm">Professional resumes crafted by AI.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                    <User size={12} /> Full Name
                                </label>
                                <Input
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="bg-muted/30 border-white/5"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                    @ Email
                                </label>
                                <Input
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="bg-muted/30 border-white/5"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Professional Summary</label>
                            <Textarea
                                placeholder="Briefly describe your professional background..."
                                value={form.summary}
                                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                                className="bg-muted/30 border-white/5 resize-none h-24"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <Briefcase size={12} /> Work Experience
                            </label>
                            <Textarea
                                placeholder="Senior AI Engineer at Tech Corp (2020 - Present)..."
                                value={form.experience}
                                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                                className="bg-muted/30 border-white/5 resize-none h-24"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <GraduationCap size={12} /> Education
                            </label>
                            <Input
                                placeholder="B.Tech in Computer Science, MIT"
                                value={form.education}
                                onChange={(e) => setForm({ ...form, education: e.target.value })}
                                className="bg-muted/30 border-white/5"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <Code size={12} /> Skills
                            </label>
                            <Input
                                placeholder="React, Python, Machine Learning, AWS"
                                value={form.skills}
                                onChange={(e) => setForm({ ...form, skills: e.target.value })}
                                className="bg-muted/30 border-white/5"
                            />
                        </div>

                        <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                            <Wand2 size={10} /> Smart prompt processing — spelling and grammar auto-corrected
                        </p>

                        <Button
                            onClick={handleGenerate}
                            disabled={busy}
                            className="w-full bg-purple-600 hover:bg-purple-700 h-12 font-semibold mt-4"
                        >
                            {busy ? (isProcessing ? "Refining content..." : "Processing...") : "Generate Resume Preview"}
                        </Button>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="glass border-white/5 min-h-[600px] rounded-3xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">Preview</span>
                        {resumeData && (
                            <Button variant="ghost" size="sm" className="text-xs h-8">
                                <Download size={14} className="mr-2" /> Download PDF
                            </Button>
                        )}
                    </div>

                    <div className="flex-1 p-8 bg-white/5 m-4 rounded-2xl overflow-y-auto">
                        {!resumeData ? (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                                <FileText size={48} className="mb-4" />
                                <p>Enter your details and click generate to see the preview.</p>
                            </div>
                        ) : (
                            <div className="animate-fade-in text-slate-200">
                                <div className="border-b-2 border-purple-500/30 pb-6 mb-8">
                                    <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
                                    <p className="text-purple-400 font-medium">{resumeData.email}</p>
                                </div>

                                <section className="mb-8">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Summary</h3>
                                    <p className="text-sm leading-relaxed whitespace-pre-line">{resumeData.summary}</p>
                                </section>

                                <section className="mb-8">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Experience</h3>
                                    <p className="text-sm leading-relaxed whitespace-pre-line">{resumeData.experience}</p>
                                </section>

                                <div className="grid grid-cols-2 gap-8">
                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Education</h3>
                                        <p className="text-sm leading-relaxed">{resumeData.education}</p>
                                    </section>
                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">Skills</h3>
                                        <p className="text-sm leading-relaxed">{resumeData.skills}</p>
                                    </section>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;
