import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[1] uppercase tracking-tighter text-shadow-strong">
            BẠN CẦN LẮP ĐẶT HOẶC SỬA CHỮA MÁY LẠNH NGAY?
          </h2>
          <p className="text-white text-lg md:text-2xl mb-12 font-bold text-shadow-strong">
            Đừng ngần ngại, hãy liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất trong hôm nay. 
            Đội ngũ kỹ thuật luôn sẵn sàng phục vụ bạn 24/7 tại Biên Hòa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0900000000"
              className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-white text-primary px-10 py-6 rounded-xl font-black text-2xl shadow-2xl transition-all border-b-8 border-slate-200"
            >
              <Phone size={32} fill="currentColor" />
              <span>GỌI: 0900.000.000</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://zalo.me/0900000000"
              className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-accent text-white px-10 py-6 rounded-xl font-black text-2xl shadow-2xl transition-all border-b-8 border-blue-900"
            >
              <MessageCircle size={32} fill="currentColor" />
              <span>NHẮN ZALO NGAY</span>
            </motion.a>
          </div>

          <p className="mt-12 text-highlight text-lg font-black uppercase tracking-[0.2em]">
            ⭐ CAM KẾT CÓ MẶT TRONG 60 PHÚT - BẢO HÀNH 18 THÁNG ⭐
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
