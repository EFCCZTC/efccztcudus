import { Scale, Handshake, Shield, Target } from 'lucide-react';

const CommitmentSection = () => {
  return (
    <section id="commitment" className="section-padding gradient-subtle">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-section mb-6">Our Commitment to Integrity</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                EFCC-ZTC UDUS stands at the forefront of championing integrity and transparency within our community. Our mission is to empower students with the knowledge and tools to combat corruption, fostering a culture of honesty and accountability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a society where integrity prevails, driving sustainable development and progress. Our core values include integrity, courage, teamwork, and respect.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-elegant">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-accent mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower students with knowledge and tools to combat corruption, fostering accountability and transparency.
                </p>
              </div>
              <div className="card-elegant">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-accent mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  A society where integrity prevails, driving sustainable development and progress for all.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="card-elegant text-center">
                <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-accent mb-2">Justice</h4>
                <p className="text-sm text-muted-foreground">Equal treatment and fairness for all</p>
              </div>
              <div className="card-elegant text-center mt-8">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-accent mb-2">Unity</h4>
                <p className="text-sm text-muted-foreground">Strength through collaboration</p>
              </div>
            </div>
            
            {/* Decorative background pattern */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-light/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;