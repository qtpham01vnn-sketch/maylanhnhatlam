import React from 'react';
import { Wrench, Settings, Wind, Construction, Thermometer, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Lắp đặt máy lạnh",
      desc: "Thi công lắp đặt máy lạnh treo tường, âm trần, tủ đứng... đúng kỹ thuật, thẩm mỹ cao.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Settings,
      title: "Sửa chữa máy lạnh",
      desc: "Khắc phục triệt để các lỗi không lạnh, chảy nước, kêu to, hư board mạch, thay block...",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Wind,
      title: "Vệ sinh - Bảo trì",
      desc: "Vệ sinh định kỳ giúp máy lạnh sạch khuẩn, làm lạnh sâu và tiết kiệm điện năng tối đa.",
      image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Construction,
      title: "Thi công hệ thống",
      desc: "Thi công ống đồng, ống gió, hệ thống máy lạnh Multi, VRV cho biệt thự, tòa nhà, nhà xưởng.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Dịch vụ của chúng tôi</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark uppercase tracking-tighter">GIẢI PHÁP MÁY LẠNH <span className="text-primary">TOÀN DIỆN</span></h3>
            <div className="w-24 h-1.5 bg-primary mt-4"></div>
          </div>
          <p className="text-slate-500 max-w-md font-medium">
            Chúng tôi cung cấp đầy đủ các dịch vụ từ dân dụng đến công nghiệp với đội ngũ thợ lành nghề, tận tâm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] md:aspect-auto md:h-[450px] shadow-2xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-16 h-16 bg-highlight text-primary rounded-xl flex items-center justify-center mb-6 shadow-xl">
                  <service.icon size={32} />
                </div>
                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h4>
                <p className="text-white/80 mb-8 max-w-sm font-bold leading-relaxed">
                  {service.desc}
                </p>
                <a href="#contact" className="flex items-center space-x-3 text-highlight font-black uppercase tracking-widest group/btn text-sm">
                  <span>TÌM HIỂU THÊM</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
