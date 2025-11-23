import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760035303523-825b45bd5cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjMxNTU4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Origami Art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)] text-center">
        <p
          className="text-[var(--origami-text-tertiary)] mb-3 tracking-[2px] uppercase"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          Paper Folding Art
        </p>
        <h2
          className="text-[var(--origami-magenta)] mb-4"
          style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 'var(--font-weight-bold)' }}
        >
          종이로 그리는 꿈
        </h2>
        <p
          className="text-[var(--origami-text-primary)] max-w-2xl mx-auto"
          style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--line-height-relaxed)' }}
        >
          한국종이접기협회는 종이접기 문화를 발전시키고
          <br className="hidden sm:block" />
          창의적인 교육 프로그램을 통해 미래를 준비합니다
        </p>
      </div>
    </section>
  );
}
