import { useState } from 'react';
import { Users, CheckCircle, Star, Award, BookOpen, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const JoinUsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    level: '',
    agreeToTerms: false
  });

  const benefits = [
    {
      icon: BookOpen,
      title: 'Knowledge & Skills Development',
      description: 'Access to exclusive training programs on integrity, ethics, and anti-corruption strategies.'
    },
    {
      icon: Users,
      title: 'Network of Integrity Champions',
      description: 'Connect with like-minded students and professionals committed to transparency and accountability.'
    },
    {
      icon: Award,
      title: 'Leadership Opportunities',
      description: 'Participate in leadership roles and organize impactful anti-corruption campaigns.'
    },
    {
      icon: Star,
      title: 'Recognition & Certificates',
      description: 'Receive certificates and recognition for your contributions to promoting integrity.'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Make a real difference in building a corruption-free academic environment.'
    }
  ];

  const departments = [
    'Faculty of Arts and Social Sciences',
    'Faculty of Education',
    'Faculty of Law',
    'Faculty of Science',
    'Faculty of Veterinary Medicine',
    'Faculty of Agriculture',
    'Faculty of Engineering',
    'Faculty of Management Sciences',
    'Faculty of Pharmaceutical Sciences',
    'Other'
  ];

  const levels = ['100 Level', '200 Level', '300 Level', '400 Level', '500 Level', 'Postgraduate'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        variant: "destructive",
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed."
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted Successfully!",
      description: "Welcome to EFCC-ZTC UDUS! You'll receive a confirmation email with next steps within 24 hours."
    });

    // Reset form
    setFormData({
      fullName: '',
      studentId: '',
      email: '',
      phone: '',
      department: '',
      level: '',
      agreeToTerms: false
    });
  };

  return (
    <section id="join" className="section-padding gradient-subtle">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="heading-section mb-6">Join Our Movement</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Become part of a community dedicated to promoting integrity, transparency, and accountability. 
            Together, we can create lasting change in our academic environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6">Why Join EFCC-ZTC UDUS?</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As a member of our Zero Tolerance Club, you'll be at the forefront of the fight against corruption, 
                equipped with the tools and knowledge to make a meaningful impact in your community.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Programs Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Member Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Membership Form */}
          <div className="card-elegant">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-accent mb-2">Membership Application</h3>
              <p className="text-muted-foreground">Join us in building a corruption-free academic environment.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-accent font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="studentId" className="text-accent font-semibold">
                    Student ID *
                  </Label>
                  <Input
                    id="studentId"
                    type="text"
                    placeholder="e.g., UDUS/XXX/XXXXX"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-accent font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@udusok.edu.ng"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-accent font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="department" className="text-accent font-semibold">
                    Department/Faculty *
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, department: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="level" className="text-accent font-semibold">
                    Current Level *
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, level: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, agreeToTerms: checked as boolean })
                  }
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to abide by the club's constitution, code of conduct, and actively participate in 
                  promoting integrity and transparency within the university community. I understand that 
                  membership requires commitment to the club's values and objectives.
                </Label>
              </div>

              <Button type="submit" className="w-full btn-primary">
                <CheckCircle className="w-4 h-4 mr-2" />
                Submit Application
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Applications are reviewed within 48 hours. You'll receive an email confirmation once approved.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;