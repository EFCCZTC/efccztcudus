import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CommitmentSection from '@/components/CommitmentSection';
import LeadershipSection from '@/components/LeadershipSection';
import ReportCorruptionSection from '@/components/ReportCorruptionSection';
import JoinUsSection from '@/components/JoinUsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CommitmentSection />
        <LeadershipSection />
        <ReportCorruptionSection />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
