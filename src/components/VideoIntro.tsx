import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoIntro = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-100 group aspect-video">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/wxEABABVIs4" 
                title="Giới thiệu Nhật Lâm AC" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-highlight rounded-xl -z-10 shadow-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-xl -z-10 shadow-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Video Giới Thiệu</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark mb-8 uppercase tracking-tighter leading-[1.1]">
              XEM CẬN CẢNH <span className="text-primary">QUY TRÌNH</span> LÀM VIỆC CHUYÊN NGHIỆP
            </h3>
            <div className="w-24 h-1.5 bg-primary mb-8"></div>
            
            <p className="text-slate-600 text-lg font-bold mb-8 leading-relaxed">
              Chúng tôi không chỉ nói, chúng tôi chứng minh bằng hành động. Hãy xem video để hiểu rõ tại sao hàng ngàn khách hàng tại Biên Hòa tin tưởng lựa chọn Nhật Lâm AC.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-dark uppercase tracking-tight">Kỹ thuật viên chuyên nghiệp</h4>
                  <p className="text-slate-500 text-sm font-medium">Thợ lành nghề, trang thiết bị hiện đại, quy trình chuẩn Nhật Bản.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-black text-dark uppercase tracking-tight">Xử lý nhanh chóng</h4>
                  <p className="text-slate-500 text-sm font-medium">Cam kết xử lý triệt để mọi sự cố ngay trong lần đầu tiên.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
