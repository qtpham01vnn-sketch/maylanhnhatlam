import React from 'react';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      name: "Máy lạnh Daikin Inverter 1.0 HP",
      brand: "Daikin",
      price: "Liên hệ",
      features: ["Tiết kiệm điện", "Lọc bụi mịn", "Hoạt động êm"],
      image: "https://images.unsplash.com/photo-1631548484237-96916d78e244?q=80&w=1974&auto=format&fit=crop",
      tag: "Bán chạy"
    },
    {
      name: "Máy lạnh Panasonic Inverter 1.5 HP",
      brand: "Panasonic",
      price: "Liên hệ",
      features: ["Nanoe-G diệt khuẩn", "Làm lạnh nhanh", "Eco Mode"],
      image: "https://images.unsplash.com/photo-1631548484237-96916d78e244?q=80&w=1974&auto=format&fit=crop",
      tag: "Cao cấp"
    },
    {
      name: "Máy lạnh Mitsubishi Heavy 1.0 HP",
      brand: "Mitsubishi",
      price: "Liên hệ",
      features: ["Bền bỉ vượt trội", "Làm lạnh sâu", "Chống ăn mòn"],
      image: "https://images.unsplash.com/photo-1631548484237-96916d78e244?q=80&w=1974&auto=format&fit=crop",
      tag: "Bền bỉ"
    },
    {
      name: "Máy lạnh Nội Địa Nhật (Đã qua sử dụng)",
      brand: "Nội Địa Nhật",
      price: "Giá cực tốt",
      features: ["Siêu tiết kiệm điện", "Độ bền cao", "Nhiều tính năng"],
      image: "https://images.unsplash.com/photo-1631548484237-96916d78e244?q=80&w=1974&auto=format&fit=crop",
      tag: "Giá rẻ"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Sản phẩm nổi bật</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark mb-6 uppercase tracking-tighter">MÁY LẠNH NỘI ĐỊA NHẬT</h3>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
          <p className="text-slate-500 font-bold">
            Chúng tôi cung cấp đa dạng các dòng máy lạnh từ máy mới chính hãng đến máy cũ nội địa Nhật chất lượng cao.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl border-2 border-slate-100 shadow-xl overflow-hidden group hover:border-primary transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-tr-xl rounded-bl-xl shadow-lg">
                  {product.tag}
                </span>
                <div className="absolute bottom-4 right-4 bg-highlight text-primary font-black text-[10px] px-2 py-1 rounded">
                  MỚI 95%
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-1 text-highlight mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-slate-400 text-xs font-bold ml-1">(4.9)</span>
                </div>
                <h4 className="font-black text-dark mb-2 line-clamp-2 h-12 uppercase tracking-tight text-sm">{product.name}</h4>
                <div className="flex items-baseline space-x-2 mb-4">
                  <p className="text-primary font-black text-2xl">{product.price}</p>
                  <p className="text-slate-400 text-xs line-through font-bold">8.500.000đ</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-600 font-bold">
                      <Zap size={12} className="text-primary mr-2" fill="currentColor" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://zalo.me/0900000000" 
                  className="w-full flex items-center justify-center space-x-2 bg-accent text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-lg border-b-4 border-blue-900"
                >
                  <ShoppingCart size={18} />
                  <span>TƯ VẤN & BÁO GIÁ</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">Và còn rất nhiều thương hiệu khác như: Toshiba, LG, Casper, Samsung...</p>
          <a href="#contact" className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:underline">
            <span>Xem tất cả sản phẩm</span>
            <Star size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
