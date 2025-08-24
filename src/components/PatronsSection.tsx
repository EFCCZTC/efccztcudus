import { ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const PatronsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const patrons = [
    {
      name: 'Prof. Lawal Suleiman Bilbis',
      title: 'Vice-Chancellor, UDUS',
      designation: 'Chief Patron',
      image: '/api/placeholder/300/300',
      quote: 'Integrity is the foundation of academic excellence and societal progress.'
    },
    {
      name: 'Prof. Fatima Tahir',
      title: 'Deputy Vice-Chancellor (Academic)',
      designation: 'Patron',
      image: '/api/placeholder/300/300',
      quote: 'Supporting the fight against corruption through education and awareness.'
    },
    {
      name: 'Dr. Abdullahi Muhammad',
      title: 'Dean, Faculty of Law',
      designation: 'Staff Adviser',
      image: '/api/placeholder/300/300',
      quote: 'Legal knowledge empowers students to understand and combat corruption.'
    },
    {
      name: 'Dr. Aisha Kebbi',
      title: 'Director, Student Affairs',
      designation: 'Staff Adviser',
      image: '/api/placeholder/300/300',
      quote: 'Character building is essential for developing future leaders.'
    },
    {
      name: 'Prof. Ibrahim Sokoto',
      title: 'Head, Department of Political Science',
      designation: 'Academic Adviser',
      image: '/api/placeholder/300/300',
      quote: 'Good governance begins with educated and ethical citizens.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(patrons.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(patrons.length / 2)) % Math.ceil(patrons.length / 2));
  };

  const getVisiblePatrons = () => {
    const startIndex = currentSlide * 2;
    return patrons.slice(startIndex, startIndex + 2);
  };

  return (
    <section id="patrons" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="heading-section mb-6">Our Patrons & Staff Advisers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished faculty members and administrators who provide guidance, wisdom, and support 
            to our mission of promoting integrity and transparency at UDUS.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {getVisiblePatrons().map((patron, index) => (
              <div key={patron.name} className="card-elegant text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full gradient-hero p-1">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <Award className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-accent mb-2">{patron.name}</h3>
                <p className="text-primary font-semibold mb-1">{patron.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{patron.designation}</p>
                
                {/* Quote */}
                <div className="relative">
                  <div className="text-4xl text-primary/20 mb-2">"</div>
                  <p className="italic text-muted-foreground leading-relaxed px-4">
                    {patron.quote}
                  </p>
                  <div className="text-4xl text-primary/20 text-right mt-2">"</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(patrons.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="card-elegant bg-primary/5 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-accent mb-4">Advisory Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our patrons and staff advisers provide strategic guidance, academic oversight, and institutional 
              support to ensure our activities align with university policies and educational objectives. 
              Their expertise and mentorship are invaluable to our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatronsSection;