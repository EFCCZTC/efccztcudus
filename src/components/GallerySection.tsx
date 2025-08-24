import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/api/placeholder/600/400',
      title: 'Anti-Corruption Sensitization Workshop',
      date: 'June 15, 2024',
      location: 'UDUS Main Auditorium',
      participants: '200+ Students',
      description: 'Interactive workshop on identifying and reporting corruption in academic settings.'
    },
    {
      id: 2,
      src: '/api/placeholder/600/400',
      title: 'Integrity Week Celebration',
      date: 'May 20, 2024',
      location: 'University Campus',
      participants: '500+ Community Members',
      description: 'Week-long celebration of integrity with various educational activities and exhibitions.'
    },
    {
      id: 3,
      src: '/api/placeholder/600/400',
      title: 'Leadership Training Program',
      date: 'April 10, 2024',
      location: 'Conference Hall',
      participants: '50+ Members',
      description: 'Intensive training program for developing ethical leadership skills among student members.'
    },
    {
      id: 4,
      src: '/api/placeholder/600/400',
      title: 'Community Outreach Initiative',
      date: 'March 5, 2024',
      location: 'Local Secondary Schools',
      participants: '300+ Students',
      description: 'Educational outreach program to local schools promoting integrity and anti-corruption values.'
    },
    {
      id: 5,
      src: '/api/placeholder/600/400',
      title: 'Annual General Meeting',
      date: 'February 14, 2024',
      location: 'Faculty of Law',
      participants: '100+ Members',
      description: 'Annual meeting reviewing achievements and planning future anti-corruption initiatives.'
    },
    {
      id: 6,
      src: '/api/placeholder/600/400',
      title: 'Corruption Reporting Campaign Launch',
      date: 'January 25, 2024',
      location: 'Student Union Building',
      participants: '150+ Students',
      description: 'Launch of the anonymous corruption reporting system with awareness campaign.'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="section-padding gradient-subtle">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our journey through photos capturing our events, workshops, outreach programs, 
            and community engagement initiatives promoting integrity and transparency.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="card-elegant cursor-pointer group overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-primary font-semibold">Photo Preview</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View Image
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-accent text-sm">{image.title}</h3>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{image.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{image.participants}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{image.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 z-10 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={() => navigateImage('prev')}
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => navigateImage('next')}
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Image and Details */}
              <div className="bg-background rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-primary font-semibold text-lg">Event Photo</p>
                    <p className="text-muted-foreground">{galleryImages[selectedImage].title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-4">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{galleryImages[selectedImage].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{galleryImages[selectedImage].location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{galleryImages[selectedImage].participants}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '25+', label: 'Events Organized' },
            { number: '2000+', label: 'Students Reached' },
            { number: '15+', label: 'Outreach Programs' },
            { number: '500+', label: 'Active Participants' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;