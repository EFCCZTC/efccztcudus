import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const officeHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM', status: 'Open' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM', status: 'Limited Hours' },
    { day: 'Sunday', time: 'Closed', status: 'Closed' }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any questions, suggestions, or to learn more about joining our mission 
            to promote integrity and transparency at UDUS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-elegant">
            <h3 className="text-xl font-bold text-accent mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-accent font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-accent font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-accent font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-accent font-semibold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you or share your thoughts about our mission..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-primary">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We typically respond to messages within 24 hours during business days.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address & Contact Details */}
            <div className="card-elegant">
              <h3 className="text-xl font-bold text-accent mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Office Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      EFCC-ZTC UDUS Office<br />
                      Student Union Building, Room 203<br />
                      Usmanu Danfodiyo University<br />
                      Sokoto Main Campus, Sokoto, NG
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Email Address</h4>
                    <a 
                      href="mailto:efccztc@udusok.edu.ng"
                      className="text-primary hover:text-primary-hover transition-colors duration-300 font-medium"
                    >
                      efccztc@udusok.edu.ng
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Primary contact for all inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Phone Numbers</h4>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Office:</span> +234 (0) 802 XXX XXXX
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Emergency:</span> +234 (0) 803 XXX XXXX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card-elegant">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-accent">Office Hours</h3>
              </div>
              
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-semibold text-accent">{schedule.day}</p>
                      <p className="text-sm text-muted-foreground">{schedule.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.status === 'Open' 
                        ? 'bg-green-100 text-green-800' 
                        : schedule.status === 'Limited Hours'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Note:</strong> For urgent corruption reports or emergencies outside office hours, 
                  please use our 24/7 hotline or submit through our anonymous online reporting system.
                </p>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-elegant text-center bg-primary/5">
                <User className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-accent mb-2">Student Inquiries</h4>
                <p className="text-xs text-muted-foreground">Join us, events, programs</p>
              </div>
              <div className="card-elegant text-center bg-primary/5">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-accent mb-2">Media & Press</h4>
                <p className="text-xs text-muted-foreground">Interviews, partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;