import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--origami-dark-gray)] text-white py-8">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[var(--origami-blue)] text-xl" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                  종
                </span>
              </div>
              <div>
                <h3 className="text-sm" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                  한국종이접기협회
                </h3>
                <p className="text-xs opacity-70">KOREA ORIGAMI ASSOCIATION</p>
              </div>
            </div>
            <p className="text-xs opacity-80 leading-relaxed">
              종이로 그리는 꿈, 한국종이접기협회는
              <br />
              종이접기 문화 발전과 교육에 앞장섭니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm" style={{ fontWeight: 'var(--font-weight-bold)' }}>
              연락처
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="opacity-80">서울특별시 강남구 테헤란로 123</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="opacity-80">02-1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="opacity-80">info@origami.or.kr</span>
              </li>
            </ul>
          </div>

          {/* Links & Social */}
          <div>
            <h4 className="mb-4 text-sm" style={{ fontWeight: 'var(--font-weight-bold)' }}>
              바로가기
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a href="#" className="text-xs opacity-80 hover:opacity-100 hover:text-[var(--origami-blue)] transition-colors">
                개인정보처리방침
              </a>
              <span className="text-xs opacity-50">|</span>
              <a href="#" className="text-xs opacity-80 hover:opacity-100 hover:text-[var(--origami-blue)] transition-colors">
                이용약관
              </a>
              <span className="text-xs opacity-50">|</span>
              <a href="#" className="text-xs opacity-80 hover:opacity-100 hover:text-[var(--origami-blue)] transition-colors">
                사이트맵
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-xs opacity-70">
            Copyright © 2025 한국종이접기협회. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
