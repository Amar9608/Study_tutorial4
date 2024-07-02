// app/page.js
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import VideoSection from '../components/VideoSection';
import FeatureSection from '../components/FeatureSection';
import SolutionsSection from '../components/SolutionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';


export default function HomePage() {
  return (
    <div>
      <Header />
      <MainContent />
      <VideoSection />
      <FeatureSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
