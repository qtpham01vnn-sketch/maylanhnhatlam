import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-bold text-2xl text-white leading-none">NHẬT LÂM</span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-blue-500">Dịch Vụ Máy Lạnh</span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Công ty TMDV Đặng Công Nhật Lâm - Chuyên gia giải pháp máy lạnh trọn gói tại Biên Hòa, Đồng Nai. 
              Uy tín tạo nên thương hiệu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Dịch vụ</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Lắp đặt máy lạnh</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sửa chữa máy lạnh</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vệ sinh - Bảo trì</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bơm gas máy lạnh</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Thi công ống đồng</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Liên hệ</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Địa chỉ</p>
                  <p className="text-xs leading-relaxed">TP. Biên Hòa, Tỉnh Đồng Nai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Hotline</p>
                  <p className="text-xs leading-relaxed">0900.000.000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Giờ làm việc</p>
                  <p className="text-xs leading-relaxed">24/7 (Cả ngày lễ và Chủ nhật)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Email</p>
                  <p className="text-xs leading-relaxed">contact@nhatlamac.vn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Công ty TMDV Đặng Công Nhật Lâm. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
