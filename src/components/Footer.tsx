import { ArrowUp, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Report Corruption', href: '#report' },
    { label: 'Join Us', href: '#join' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <footer className="bg-accent text-accent-foreground relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full gradient-hero text-white hover:scale-110 transition-all duration-300 shadow-elegant"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container-max section-padding pt-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">EFCC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">EFCC-ZTC UDUS</h3>
                <p className="text-accent-foreground/80">Zero Tolerance Club</p>
              </div>
            </div>
            
            <p className="text-accent-foreground/80 leading-relaxed mb-6 max-w-md">
              Championing integrity and transparency at Usmanu Danfodiyo University Sokoto. 
              Join us in building a corruption-free academic environment where integrity starts with each individual.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-accent-foreground/80">
                    Usmanu Danfodiyo University<br />
                    Sokoto Main Campus, Sokoto, NG
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:efccztc@udusok.edu.ng" 
                    className="text-primary hover:text-primary-light transition-colors duration-300"
                  >
                    efccztc@udusok.edu.ng
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Office Hours</h4>
            <div className="space-y-3">
              {officeHours.map((schedule) => (
                <div key={schedule.day} className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">{schedule.day}</p>
                    <p className="text-accent-foreground/80 text-sm">{schedule.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-foreground/80 text-sm">
              © 2025 EFCC-ZTC UDUS. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-foreground/80 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-primary transition-colors duration-300">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;