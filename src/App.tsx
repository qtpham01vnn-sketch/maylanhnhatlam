import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Brands from './components/Brands';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import VideoIntro from './components/VideoIntro';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Brands />
        <Products />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <VideoIntro />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-40 flex md:hidden gap-4">
        <a 
          href="tel:0900000000" 
          className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white py-4 rounded-xl font-black shadow-2xl border-b-4 border-red-900"
        >
          <Phone size={20} fill="currentColor" />
          <span>GỌI NGAY</span>
        </a>
        <a 
          href="https://zalo.me/0900000000" 
          className="flex-1 flex items-center justify-center space-x-2 bg-accent text-white py-4 rounded-xl font-black shadow-2xl border-b-4 border-blue-900"
        >
          <MessageCircle size={20} fill="currentColor" />
          <span>ZALO</span>
        </a>
      </div>
    </div>
  );
}

import { Phone, MessageCircle } from 'lucide-react';
