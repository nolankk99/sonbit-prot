import { UserPlus, Award, Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function SidebarWidgets() {
  return (
    <div className="space-y-6">
      {/* Member Registration */}
      <div
        className="bg-[var(--origami-lime-green)] text-white p-5 rounded-[var(--radius-base)]"
      >
        <div className="flex items-center gap-3 mb-3">
          <UserPlus className="w-6 h-6" />
          <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
            회원등록 안내
          </h3>
        </div>
        <p className="mb-4 opacity-90" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--line-height-relaxed)' }}>
          한국종이접기협회 회원이 되어 다양한 혜택을 누리세요
        </p>
        <Button
          className="w-full bg-white text-[var(--origami-lime-green)] hover:bg-white/90"
          style={{ fontWeight: 'var(--font-weight-bold)' }}
        >
          회원가입하기
        </Button>
      </div>

      {/* Master Certification */}
      <div
        className="bg-white p-5 rounded-[var(--radius-base)]"
        style={{ border: '2px dashed var(--origami-magenta)' }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Award className="w-6 h-6 text-[var(--origami-magenta)]" />
          <h3
            className="text-[var(--origami-magenta)]"
            style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}
          >
            자격증 안내
          </h3>
        </div>
        <p className="text-[var(--origami-text-secondary)] mb-4" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--line-height-relaxed)' }}>
          종이접기 지도사 자격증 취득 과정 안내
        </p>
        <ul className="space-y-2 text-sm text-[var(--origami-text-tertiary)]">
          <li>• 1급 종이접기 지도사</li>
          <li>• 2급 종이접기 지도사</li>
          <li>• 종이접기 강사 자격증</li>
        </ul>
        <Button
          variant="outline"
          className="w-full mt-4 border-[var(--origami-magenta)] text-[var(--origami-magenta)] hover:bg-[var(--origami-magenta)] hover:text-white"
        >
          자세히 보기
        </Button>
      </div>

      {/* Convention */}
      <div
        className="bg-white p-5 rounded-[var(--radius-base)]"
        style={{ border: '2px dashed var(--origami-cyan)' }}
      >
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-6 h-6 text-[var(--origami-cyan)]" />
          <h3
            className="text-[var(--origami-cyan)]"
            style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}
          >
            행사안내
          </h3>
        </div>
        <div className="space-y-3">
          <div className="bg-[var(--origami-light-gray)] p-3 rounded">
            <p className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              2025 종이접기 전국대회
            </p>
            <p className="text-xs text-[var(--origami-text-tertiary)] mt-1">
              2025.12.15 - 12.17
            </p>
          </div>
          <div className="bg-[var(--origami-light-gray)] p-3 rounded">
            <p className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              종이접기 워크샵
            </p>
            <p className="text-xs text-[var(--origami-text-tertiary)] mt-1">
              매월 셋째 주 토요일
            </p>
          </div>
        </div>
      </div>

      {/* Local Learning */}
      <div
        className="bg-[var(--origami-cyan)] text-white p-5 rounded-[var(--radius-base)]"
      >
        <div className="flex items-center gap-3 mb-3">
          <MapPin className="w-6 h-6" />
          <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
            우리지역 배움터
          </h3>
        </div>
        <p className="mb-4 opacity-90" style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--line-height-relaxed)' }}>
          가까운 곳에서 종이접기를 배워보세요
        </p>
        <Button
          className="w-full bg-white text-[var(--origami-cyan)] hover:bg-white/90"
          style={{ fontWeight: 'var(--font-weight-bold)' }}
        >
          지역별 교육장 찾기
        </Button>
      </div>
    </div>
  );
}
