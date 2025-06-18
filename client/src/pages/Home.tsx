import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Subjects from '@/components/Subjects';
import Grammar from '@/components/Grammar';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Subjects />
      <Grammar />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
