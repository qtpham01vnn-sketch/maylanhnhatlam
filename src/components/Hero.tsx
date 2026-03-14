import React from 'react';
import { Phone, MessageCircle, ChevronRight, Clock, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
          alt="Air conditioning technician working" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary text-white px-5 py-2 rounded-tr-2xl rounded-bl-2xl text-xs font-black uppercase tracking-widest mb-6 shadow-lg">
              Hơn 10 năm kinh nghiệm
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1] mb-6 uppercase tracking-tighter text-shadow-strong">
              MÁY LẠNH <span className="text-highlight">NỘI ĐỊA NHẬT</span> GIÁ CỰC TỐT
            </h1>
            <p className="text-lg md:text-xl text-white font-bold mb-10 leading-relaxed max-w-2xl text-shadow-strong">
              Bán - Lắp Đặt - Sửa Chữa - Bảo Trì Máy Lạnh. 
              Cam kết có mặt trong <span className="text-highlight font-black underline decoration-highlight underline-offset-4">1 GIỜ</span>. 
              Báo giá minh bạch, linh kiện chính hãng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0900000000"
                className="flex items-center justify-center space-x-3 bg-primary text-white px-8 py-5 rounded-xl font-black text-xl shadow-2xl hover:bg-red-700 transition-all border-b-4 border-red-900"
              >
                <Phone size={24} fill="currentColor" />
                <span>GỌI: 0900.000.000</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://zalo.me/0900000000"
                className="flex items-center justify-center space-x-3 bg-accent text-white px-8 py-5 rounded-xl font-black text-xl shadow-2xl hover:bg-blue-700 transition-all border-b-4 border-blue-900"
              >
                <MessageCircle size={24} fill="currentColor" />
                <span>NHẮN ZALO NGAY</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Clock, text: "CÓ MẶT TRONG 1 GIỜ" },
                { icon: Shield, text: "BẢO HÀNH 18 THÁNG" },
                { icon: CheckCircle, text: "TRẢ GÓP 0% LÃI SUẤT" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-white">
                  <div className="bg-highlight p-1.5 rounded-full">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-xs font-black tracking-wide uppercase">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
    </section>
  );
};

export default Hero;
