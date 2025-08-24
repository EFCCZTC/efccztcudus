import { ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('commitment');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="heading-hero text-white mb-6 animate-fade-in">
            Join the <span className="text-primary-light">#1 Campus Watchdog</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in">
            <strong>Integrity Starts With Me</strong> – Promoting transparency, accountability, and ethical values at Usmanu Danfodiyo University Sokoto.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
            <a 
              href="#report" 
              className="btn-primary min-w-[200px] hover:shadow-elegant"
            >
              Report Corruption
            </a>
            <a 
              href="#join" 
              className="btn-outline border-white text-white hover:bg-white hover:text-accent min-w-[200px]"
            >
              Become a Member
            </a>
          </div>

          {/* Values Highlight */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in">
            {[
              { title: 'Integrity', description: 'Unwavering honesty' },
              { title: 'Courage', description: 'Fearless action' },
              { title: 'Teamwork', description: 'United strength' },
              { title: 'Respect', description: 'Mutual dignity' }
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-white/80 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-primary-light transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;