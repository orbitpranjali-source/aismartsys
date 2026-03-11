import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Sparkles, Download, User, Briefcase, GraduationCap, Code, Wand2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { usePromptProcessor } from "@/hooks/usePromptProcessor";
// @ts-ignore
import html2pdf from "html2pdf.js";

const ResumeBuilder = () => {
    const [form, setForm] = useState({
        name: "",
        jobTitle: "",
        email: "",
        phone: "",
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

        try {
            // Process text fields through AI refinement with strict formatting instructions
            const summaryContext = "You are an expert resume writer. Rewrite the following into a highly professional, compelling resume summary paragraph. OUTPUT ONLY the exact summary text. Do not include phrases like 'Here is your summary' or 'Please provide'.";
            const experienceContext = "You are an expert resume writer. Convert the following work experience into professional resume bullet points. Use action verbs and highlight achievements. Output ONLY the bullet points, each starting with the '•' character. DO NOT include headers or conversational text.";
            const educationContext = "Extract and strictly format the following education details for a professional resume (e.g., Degree - Institution). Output ONLY the formatted text.";
            const skillsContext = "Format the following skills into a clean, comma-separated list of professional keywords. Output ONLY the list.";

            const [refinedSummary, refinedExperience, refinedEducation, refinedSkills] = await Promise.all([
                form.summary ? processPrompt(form.summary, summaryContext) : Promise.resolve(form.summary),
                form.experience ? processPrompt(form.experience, experienceContext) : Promise.resolve(form.experience),
                form.education ? processPrompt(form.education, educationContext) : Promise.resolve(form.education),
                form.skills ? processPrompt(form.skills, skillsContext) : Promise.resolve(form.skills),
            ]);

            const refined = {
                ...form,
                summary: refinedSummary,
                experience: refinedExperience,
                education: refinedEducation,
                skills: refinedSkills,
            };

            setResumeData(refined);
            toast.success("Resume preview generated!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate resume.");
        } finally {
            setIsGenerating(false);
        }
    };

    const downloadPDF = () => {
        const element = document.getElementById("resume-preview-content");
        if (!element || !resumeData) return;

        const fileName = `resume-${resumeData.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.pdf`;

        const opt = {
            margin: 10,
            filename: fileName,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        toast.promise(
            html2pdf().set(opt).from(element).save(),
            {
                loading: 'Generating PDF...',
                success: 'Resume downloaded successfully!',
                error: 'Failed to generate PDF.'
            }
        );
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
                                    <Briefcase size={12} /> Job Title
                                </label>
                                <Input
                                    placeholder="Software Engineer"
                                    value={form.jobTitle}
                                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
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
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                    Phone
                                </label>
                                <Input
                                    placeholder="+1 234 567 8900"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                            <Wand2 size={10} /> Smart AI formatting — inputs are automatically structured and refined
                        </p>

                        <Button
                            onClick={handleGenerate}
                            disabled={busy}
                            className="w-full bg-purple-600 hover:bg-purple-700 h-12 font-semibold mt-4"
                        >
                            {busy ? (
                                <>
                                    <RefreshCw size={18} className="mr-2 animate-spin" /> Generating Professional Resume...
                                </>
                            ) : (
                                "Generate Resume"
                            )}
                        </Button>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="glass border-white/5 min-h-[600px] rounded-3xl overflow-hidden flex flex-col relative">
                    <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center z-10">
                        <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">Preview</span>
                        {resumeData && !busy && (
                            <Button variant="ghost" size="sm" className="text-xs h-8" onClick={downloadPDF}>
                                <Download size={14} className="mr-2" /> Download PDF
                            </Button>
                        )}
                    </div>

                    <div className="flex-1 p-8 bg-white/5 m-4 rounded-2xl overflow-y-auto relative">
                        {busy ? (
                            <div className="absolute inset-0 z-20 bg-background/50 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
                                <RefreshCw size={32} className="animate-spin text-purple-500 mb-4" />
                                <p className="font-medium animate-pulse">Structuring your professional resume...</p>
                            </div>
                        ) : null}

                        {!resumeData && !busy ? (
                            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                                <FileText size={48} className="mb-4" />
                                <p>Enter your details and click generate to see the preview.</p>
                            </div>
                        ) : resumeData ? (
                            <div className="animate-fade-in text-slate-800 bg-white p-8 rounded-xl shadow-sm min-h-full" id="resume-preview-content">
                                <div className="border-b-2 border-slate-200 pb-6 mb-8 text-center">
                                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-slate-900">{resumeData.name}</h1>
                                    <p className="text-xl text-purple-600 font-medium mb-3">{resumeData.jobTitle}</p>
                                    <div className="flex justify-center flex-wrap gap-4 text-sm text-slate-500 font-medium">
                                        <span>{resumeData.email}</span>
                                        {resumeData.phone && (
                                            <>
                                                <span>•</span>
                                                <span>{resumeData.phone}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {resumeData.summary && (
                                    <section className="mb-8">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3 border-b border-slate-200 pb-1">Professional Summary</h3>
                                        <p className="text-sm leading-relaxed whitespace-pre-line text-slate-700">{resumeData.summary}</p>
                                    </section>
                                )}

                                {resumeData.experience && (
                                    <section className="mb-8">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3 border-b border-slate-200 pb-1">Work Experience</h3>
                                        <div className="text-sm leading-relaxed whitespace-pre-line text-slate-700 ml-4 max-w-full">
                                            {resumeData.experience.split('\n').map((line, idx) => (
                                                <div key={idx} className={`${line.trim().startsWith('•') || line.trim().startsWith('-') ? 'flex gap-2' : ''} mb-2`}>
                                                    {line.trim()}
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                <div className="grid grid-cols-2 gap-8">
                                    {resumeData.education && (
                                        <section>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3 border-b border-slate-200 pb-1">Education</h3>
                                            <p className="text-sm leading-relaxed whitespace-pre-line text-slate-700">{resumeData.education}</p>
                                        </section>
                                    )}
                                    {resumeData.skills && (
                                        <section>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-3 border-b border-slate-200 pb-1">Skills</h3>
                                            <p className="text-sm leading-relaxed whitespace-pre-line text-slate-700">{resumeData.skills}</p>
                                        </section>
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;
