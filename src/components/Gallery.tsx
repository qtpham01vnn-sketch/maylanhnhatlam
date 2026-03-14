import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      title: "Lắp đặt máy lạnh âm trần"
    },
    {
      url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop",
      title: "Vệ sinh máy lạnh căn hộ"
    },
    {
      url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
      title: "Sửa chữa hệ thống trung tâm"
    },
    {
      url: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop",
      title: "Thi công ống đồng nhà phố"
    },
    {
      url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop",
      title: "Bảo trì máy lạnh văn phòng"
    },
    {
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      title: "Lắp đặt máy lạnh treo tường"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Hình ảnh thực tế</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Công trình đã thực hiện</h3>
          <p className="text-slate-500">
            Minh chứng cho chất lượng dịch vụ và sự chuyên nghiệp của đội ngũ kỹ thuật Nhật Lâm.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
