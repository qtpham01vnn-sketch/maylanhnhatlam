import React from 'react';
import { Award, Clock, FileText, ShieldCheck, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const usps = [
    {
      icon: Award,
      title: "10 năm kinh nghiệm",
      desc: "Đội ngũ kỹ thuật tay nghề cao, xử lý chuyên nghiệp mọi hệ thống máy lạnh."
    },
    {
      icon: Clock,
      title: "Có mặt trong 1 giờ",
      desc: "Phản ứng nhanh chóng ngay sau khi nhận được yêu cầu từ khách hàng."
    },
    {
      icon: FileText,
      title: "Báo giá trước khi làm",
      desc: "Minh bạch chi phí, khách hàng đồng ý mới tiến hành công việc."
    },
    {
      icon: Zap,
      title: "Không phát sinh chi phí",
      desc: "Cam kết giá đúng như báo ban đầu, không thu thêm bất kỳ khoản nào."
    },
    {
      icon: ShieldCheck,
      title: "Linh kiện chính hãng",
      desc: "Sử dụng linh kiện thay thế chuẩn hãng, đảm bảo độ bền và hiệu suất."
    },
    {
      icon: Users,
      title: "Có hóa đơn VAT",
      desc: "Cung cấp đầy đủ hóa đơn, chứng từ cho doanh nghiệp và công ty."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs font-black text-highlight uppercase tracking-[0.3em] mb-3">Tại sao chọn chúng tôi</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1] uppercase tracking-tighter">
              CHÚNG TÔI MANG ĐẾN SỰ <span className="text-highlight">AN TÂM TUYỆT ĐỐI</span>
            </h3>
            <div className="w-24 h-1.5 bg-highlight mb-8"></div>
            <p className="text-white/80 text-lg mb-10 leading-relaxed font-bold">
              Với hơn một thập kỷ hoạt động tại Biên Hòa, Công ty Đặng Công Nhật Lâm đã trở thành đối tác tin cậy của hàng ngàn hộ gia đình và doanh nghiệp.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    alt="Customer" 
                    className="w-14 h-14 rounded-full border-4 border-primary"
                  />
                ))}
              </div>
              <div>
                <p className="font-black text-3xl text-highlight">5,000+</p>
                <p className="text-white/60 text-xs font-black uppercase tracking-widest">Khách hàng hài lòng</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {usps.map((usp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/10 p-8 rounded-xl hover:bg-white/20 transition-all shadow-2xl"
              >
                <div className="w-16 h-16 bg-highlight text-primary rounded-xl flex items-center justify-center mb-6 shadow-xl">
                  <usp.icon size={32} />
                </div>
                <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{usp.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed font-bold">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
