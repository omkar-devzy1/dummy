import React from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import SeasonalBanner from './components/SeasonalBanner';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import WhyPrakruti from './components/WhyPrakruti';
import PlantOfTheWeek from './components/PlantOfTheWeek';
import BestSellers from './components/BestSellers';
import LandscapingServices from './components/LandscapingServices';
import PlantQuiz from './components/PlantQuiz';
import BlogPreview from './components/BlogPreview';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import DeliveryTracking from './components/DeliveryTracking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <SeasonalBanner />
        <Navbar />
        <main>
          <Hero />
          <FeaturedCategories />
          <WhyPrakruti />
          <PlantOfTheWeek />
          <BestSellers />
          <LandscapingServices />
          <PlantQuiz />
          <BlogPreview />
          <Testimonials />
          <InstagramGallery />
          <DeliveryTracking />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CartDrawer />
      </div>
    </AppProvider>
  );
}
