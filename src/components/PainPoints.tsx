import React from 'react';
import { AlertTriangle, Droplets, Volume2, Zap, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const PainPoints = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Máy lạnh không lạnh",
      desc: "Máy vẫn chạy nhưng không ra hơi lạnh, gây khó chịu trong thời tiết nóng bức.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Droplets,
      title: "Máy lạnh chảy nước",
      desc: "Nước rò rỉ làm ướt tường, sàn nhà và có thể gây chập điện nguy hiểm.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Volume2,
      title: "Máy lạnh kêu to",
      desc: "Tiếng ồn khó chịu làm ảnh hưởng đến giấc ngủ và sự tập trung của bạn.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: Zap,
      title: "Máy lạnh hao điện",
      desc: "Hóa đơn tiền điện tăng vọt do máy hoạt động không hiệu quả hoặc quá bẩn.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Vấn đề thường gặp</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark mb-6 uppercase tracking-tighter">MÁY LẠNH CỦA BẠN ĐANG GẶP SỰ CỐ?</h3>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
          <p className="text-slate-600 text-lg font-medium">
            Đừng để những hư hỏng nhỏ làm ảnh hưởng đến cuộc sống. Chúng tôi giúp bạn xử lý triệt để mọi vấn đề.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-slate-100 hover:border-primary transition-all"
            >
              <div className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mb-6 shadow-inner`}>
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-black text-dark mb-3 uppercase tracking-tight">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed mb-6 font-medium text-sm">{item.desc}</p>
              <a href="#contact" className="text-primary font-black text-xs uppercase tracking-widest flex items-center hover:underline">
                Kiểm tra ngay <Search size={14} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 mb-8 md:mb-0">
            <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">CẦN LẮP MÁY LẠNH MỚI GIÁ TỐT?</h4>
            <p className="text-white/80 font-bold">Chúng tôi cung cấp các dòng máy lạnh chính hãng với mức giá cạnh tranh nhất.</p>
          </div>
          <a 
            href="tel:0900000000" 
            className="relative z-10 bg-highlight text-primary px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-all whitespace-nowrap shadow-xl border-b-4 border-yellow-600"
          >
            NHẬN BÁO GIÁ NGAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
