import React from 'react';

const Brands = () => {
  const brands = [
    "Daikin", "Panasonic", "Mitsubishi", "LG", "Samsung", "Toshiba", "Gree", "Casper", "Sharp", "Midea", "Carrier"
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-slate-400 font-bold text-sm uppercase tracking-widest">Đối tác & Thương hiệu uy tín</p>
      </div>
      
      <div className="flex flex-nowrap space-x-12 animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, idx) => (
          <div key={idx} className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
            <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter group-hover:text-primary">{brand}</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
};

export default Brands;
