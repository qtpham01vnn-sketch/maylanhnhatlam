import React from 'react';
import { PhoneCall, Search, FileText, CheckCircle, Settings, Award } from 'lucide-react';

const Process = () => {
  const finalSteps = [
    { icon: PhoneCall, title: "Tiếp nhận", desc: "Ghi nhận thông tin khách hàng" },
    { icon: Search, title: "Kiểm tra", desc: "Khảo sát thực tế tình trạng máy" },
    { icon: FileText, title: "Báo giá", desc: "Báo giá minh bạch trước khi làm" },
    { icon: Settings, title: "Thực hiện", desc: "Sửa chữa/Lắp đặt chuyên nghiệp" },
    { icon: CheckCircle, title: "Bàn giao", desc: "Nghiệm thu và viết phiếu bảo hành" }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Quy trình làm việc</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Làm việc chuyên nghiệp trong 5 bước</h3>
          <p className="text-slate-500">
            Chúng tôi tối ưu hóa quy trình để tiết kiệm thời gian và mang lại hiệu quả cao nhất cho khách hàng.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {finalSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-blue-500 transition-all duration-300">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <step.icon size={24} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                    {idx + 1}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
