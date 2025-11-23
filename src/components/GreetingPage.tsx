import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GreetingPage() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="border-b-2 border-[var(--origami-blue)] pb-4">
        <h1 className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>
          인사말
        </h1>
        <p className="text-[var(--origami-text-tertiary)] mt-2" style={{ fontSize: 'var(--text-sm)' }}>
          협회소개 {'>'} 인사말
        </p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-[var(--radius-base)] border border-[var(--origami-border-default)] overflow-hidden" style={{ boxShadow: 'var(--shadow-base)' }}>
        {/* President Image */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1693020742958-88f0879485ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGNyYWZ0JTIwaGFuZHN8ZW58MXx8fHwxNzYzODY0MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="협회장 인사"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)' }}>
              한국종이접기협회를 찾아주신 여러분을 환영합니다
            </h2>
            <p className="mt-2 opacity-90" style={{ fontSize: 'var(--text-base)' }}>
              협회장 김○○
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-8 md:p-12">
          <div className="space-y-6" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--line-height-relaxed)' }}>
            <p className="text-[var(--origami-text-primary)]">
              안녕하십니까? 한국종이접기협회 홈페이지를 방문해 주신 여러분께 진심으로 감사의 말씀을 드립니다.
            </p>

            <p className="text-[var(--origami-text-primary)]">
              한국종이접기협회는 1987년 설립 이래, 우리나라 종이접기 문화의 발전과 보급을 위해 끊임없이 노력해 왔습니다. 
              종이접기는 단순한 놀이가 아닌, 창의력과 집중력을 키우고 정서적 안정감을 주는 훌륭한 교육 매체입니다.
            </p>

            <p className="text-[var(--origami-text-primary)]">
              우리 협회는 다음과 같은 목표를 가지고 활동하고 있습니다:
            </p>

            <ul className="space-y-3 ml-6 text-[var(--origami-text-primary)]">
              <li className="flex gap-3">
                <span className="text-[var(--origami-blue)] shrink-0" style={{ fontWeight: 'var(--font-weight-bold)' }}>•</span>
                <span>전통 종이접기 문화의 계승 및 발전</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--origami-blue)] shrink-0" style={{ fontWeight: 'var(--font-weight-bold)' }}>•</span>
                <span>창의적인 종이접기 교육 프로그램 개발 및 보급</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--origami-blue)] shrink-0" style={{ fontWeight: 'var(--font-weight-bold)' }}>•</span>
                <span>우수한 종이접기 지도사 양성</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--origami-blue)] shrink-0" style={{ fontWeight: 'var(--font-weight-bold)' }}>•</span>
                <span>국제 교류를 통한 한국 종이접기의 세계화</span>
              </li>
            </ul>

            <p className="text-[var(--origami-text-primary)]">
              특히 최근에는 종이접기가 STEAM 교육의 중요한 도구로 주목받고 있으며, 
              노인 치매 예방과 아동 발달에도 효과적인 것으로 입증되어 그 가치가 더욱 높아지고 있습니다.
            </p>

            <p className="text-[var(--origami-text-primary)]">
              앞으로도 한국종이접기협회는 전통을 계승하면서도 현대적인 감각을 접목하여, 
              남녀노소 누구나 즐길 수 있는 종이접기 문화를 만들어가겠습니다. 
              여러분의 많은 관심과 참여를 부탁드립니다.
            </p>

            <p className="text-[var(--origami-text-primary)]">
              감사합니다.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-12 text-right">
            <p className="text-[var(--origami-text-secondary)]" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
              한국종이접기협회 협회장
            </p>
            <p className="text-[var(--origami-magenta)] mt-2" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)' }}>
              김○○
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--origami-blue)] text-white p-6 rounded-[var(--radius-base)]">
          <h3 className="mb-3" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
            협회 설립
          </h3>
          <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>
            1987년
          </p>
          <p className="mt-2 opacity-90" style={{ fontSize: 'var(--text-sm)' }}>
            38년의 역사와 전통
          </p>
        </div>

        <div className="bg-[var(--origami-magenta)] text-white p-6 rounded-[var(--radius-base)]">
          <h3 className="mb-3" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
            회원 수
          </h3>
          <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>
            5,000+
          </p>
          <p className="mt-2 opacity-90" style={{ fontSize: 'var(--text-sm)' }}>
            전국의 종이접기 애호가
          </p>
        </div>

        <div className="bg-[var(--origami-lime-green)] text-white p-6 rounded-[var(--radius-base)]">
          <h3 className="mb-3" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
            자격증 발급
          </h3>
          <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-weight-bold)' }}>
            10,000+
          </p>
          <p className="mt-2 opacity-90" style={{ fontSize: 'var(--text-sm)' }}>
            전문 지도사 배출
          </p>
        </div>
      </div>
    </div>
  );
}
