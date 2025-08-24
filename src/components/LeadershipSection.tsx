import { User, Mail, Phone, LinkedinIcon } from 'lucide-react';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Adamu Mohammed',
      role: 'President',
      email: 'president@efccztcudus.org',
      bio: 'Leading the fight against corruption with unwavering dedication to integrity.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Fatima Abdullah',
      role: 'Vice President',
      email: 'vicepresident@efccztcudus.org',
      bio: 'Supporting transformational change through education and awareness.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Ibrahim Sani',
      role: 'Secretary',
      email: 'secretary@efccztcudus.org',
      bio: 'Ensuring transparent documentation and communication across all initiatives.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Aisha Musa',
      role: 'Treasurer',
      email: 'treasurer@efccztcudus.org',
      bio: 'Managing resources with absolute transparency and accountability.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Usman Garba',
      role: 'Public Relations Officer',
      email: 'pro@efccztcudus.org',
      bio: 'Building bridges between the community and our integrity mission.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Zainab Ahmad',
      role: 'Director of Programs',
      email: 'programs@efccztcudus.org',
      bio: 'Orchestrating impactful programs that create lasting change.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <section id="leadership" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">Our Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals leading our mission to promote integrity, transparency, and accountability at UDUS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={leader.name} className="card-elegant text-center group">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full gradient-hero p-1">
                  <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                    <User className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-accent mb-2">{leader.name}</h3>
              <p className="text-primary font-semibold mb-4">{leader.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {leader.bio}
              </p>

              {/* Contact */}
              <div className="flex justify-center space-x-4">
                <a 
                  href={`mailto:${leader.email}`}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center group-hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                  <LinkedinIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Past Leadership Link */}
        <div className="text-center mt-16">
          <a 
            href="#past-leadership"
            className="inline-flex items-center text-primary hover:text-primary-hover font-semibold transition-colors duration-300"
          >
            View Past Leadership
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;