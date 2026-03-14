import React from 'react';
import { motion } from 'framer-motion';

const Flipbook = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Hồ sơ năng lực</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark mb-6 uppercase tracking-tighter">CATALOGUE NHẬT LÂM AC</h3>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
            <p className="text-slate-500 font-bold">
              Khám phá chi tiết về các dòng máy lạnh nội địa Nhật và các giải pháp làm mát tối ưu từ chúng tôi qua cuốn Catalogue điện tử dưới đây.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50"
        >
          <iframe 
            src="https://heyzine.com/flip-book/fd9bd2c0da.html" 
            className="absolute inset-0 w-full h-full"
            frameBorder="0" 
            allowFullScreen
            allow="clipboard-write"
            title="Nhật Lâm AC Catalogue"
          ></iframe>
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm italic">
            * Bạn có thể phóng to hoặc lật trang trực tiếp trên màn hình.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flipbook;
