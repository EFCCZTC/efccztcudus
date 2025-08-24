import { useState } from 'react';
import { Shield, Upload, Send, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ReportCorruptionSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
    evidence: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.details.trim()) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please provide details about the corruption incident."
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Report Submitted Successfully",
      description: "Your report has been received and will be reviewed confidentially. Thank you for your courage in reporting corruption."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      details: '',
      evidence: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, evidence: file });
  };

  return (
    <section id="report" className="section-padding bg-background">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="heading-section mb-6">Report Corruption</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your voice matters. Report corruption incidents safely and confidentially. 
              Together, we can build a transparent and accountable academic environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Information Panel */}
            <div className="space-y-8">
              <div className="card-elegant">
                <Lock className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-accent mb-4">Complete Confidentiality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your identity and all information provided will be kept strictly confidential. 
                  We understand the courage it takes to report corruption, and we protect our whistleblowers.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-accent">What to Report:</h4>
                <ul className="space-y-3">
                  {[
                    'Academic misconduct or fraud',
                    'Bribery or extortion by staff',
                    'Misuse of university resources',
                    'Unfair grading or examination practices',
                    'Financial irregularities',
                    'Any form of corruption or unethical behavior'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">✓</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-elegant bg-primary/5">
                <h4 className="text-lg font-semibold text-accent mb-3">Emergency Contact</h4>
                <p className="text-muted-foreground mb-4">
                  For urgent matters requiring immediate attention:
                </p>
                <div className="space-y-2">
                  <p className="text-accent font-semibold">24/7 Hotline: +234 (0) 802 XXX XXXX</p>
                  <p className="text-accent font-semibold">Email: urgent@efccztcudus.org</p>
                </div>
              </div>
            </div>

            {/* Report Form */}
            <div className="card-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-accent font-semibold">
                      Name (Optional)
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="You can remain anonymous"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-accent font-semibold">
                      Email (Optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="For follow-up communication"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="details" className="text-accent font-semibold">
                      Details of Corruption *
                    </Label>
                    <Textarea
                      id="details"
                      placeholder="Please provide detailed information about the corruption incident, including when and where it occurred, who was involved, and any other relevant details..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="mt-2 min-h-[120px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="evidence" className="text-accent font-semibold">
                      Upload Evidence (Optional)
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <Input
                        id="evidence"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp3,.mp4"
                      />
                      <Label htmlFor="evidence" className="cursor-pointer">
                        <span className="text-primary font-semibold">Click to upload</span>
                        <span className="text-muted-foreground"> or drag and drop</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        PDF, DOC, Images, Audio, Video (Max 10MB)
                      </p>
                      {formData.evidence && (
                        <p className="text-sm text-primary mt-2">
                          Selected: {formData.evidence.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Report Confidentially
                </Button>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By submitting this report, you acknowledge that the information provided is accurate to the best of your knowledge. 
                  False reports may be subject to disciplinary action.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCorruptionSection;