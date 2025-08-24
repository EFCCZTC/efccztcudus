import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CommitmentSection from '@/components/CommitmentSection';
import LeadershipSection from '@/components/LeadershipSection';
import PatronsSection from '@/components/PatronsSection';
import GallerySection from '@/components/GallerySection';
import ReportCorruptionSection from '@/components/ReportCorruptionSection';
import VerifyCertificateSection from '@/components/VerifyCertificateSection';
import JoinUsSection from '@/components/JoinUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CommitmentSection />
        <LeadershipSection />
        <PatronsSection />
        <GallerySection />
        <ReportCorruptionSection />
        <VerifyCertificateSection />
        <JoinUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
