import {
  UserPlus,
  Award,
  BookOpen,
  Calendar,
  Image as ImageIcon,
  FileText,
  Home,
  ChevronUp,
  ChevronDown
} from "lucide-react";

const quickLinks = [
  {
    icon: UserPlus,
    title: "회원가입",
    color: "var(--origami-blue)"
  },
  {
    icon: Award,
    title: "자격증",
    color: "var(--origami-magenta)"
  },
  {
    icon: BookOpen,
    title: "교육안내",
    color: "var(--origami-lime-green)"
  },
  {
    icon: Calendar,
    title: "행사일정",
    color: "var(--origami-cyan)"
  },
  {
    icon: ImageIcon,
    title: "갤러리",
    color: "var(--origami-blue)"
  },
  {
    icon: FileText,
    title: "자료실",
    color: "var(--origami-magenta)"
  }
];

interface QuickLinksProps {
  onPageChange?: (page: "home" | "greeting" | "login") => void;
}

export function QuickLinks({ onPageChange }: QuickLinksProps) {
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 800; // 0.8초
    let start: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToBottom = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = document.documentElement.scrollHeight;
    const distance = targetPosition - startPosition;
    const duration = 800; // 0.8초
    let start: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-48 hidden md:block">
      <div className="bg-white border border-[var(--origami-border-default)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-lg)]">
        {/* HOME Button */}
        <button
          onClick={() => onPageChange?.("home")}
          className="w-full bg-[var(--origami-blue)] text-white py-4 px-6 flex flex-col items-center gap-2 hover:bg-[var(--nav-hover-bg)] transition-colors duration-200"
          style={{ borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}
        >
          <Home className="w-6 h-6" />
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-bold)' }}>
            HOME
          </span>
        </button>

        {/* Quick Links */}
        <div className="p-4">
          <div className="space-y-2">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className="bg-white border border-[var(--origami-border-default)] rounded-[var(--radius-base)] p-3 flex flex-col items-center gap-2 hover:bg-[var(--origami-light-gray)] hover:border-[var(--origami-blue)] hover:shadow-[var(--shadow-md)] transition-all duration-200 group cursor-pointer"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:shadow-md"
                    style={{ backgroundColor: link.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[var(--origami-text-secondary)] group-hover:text-[var(--origami-blue)] transition-colors duration-200 text-center"
                    style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-medium)' }}>
                    {link.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll Buttons */}
        <div className="border-t border-[var(--origami-border-light)] flex">
          <button
            onClick={scrollToTop}
            className="flex-1 bg-[var(--origami-dark-gray)] text-white py-4 px-6 flex flex-col items-center gap-2 hover:bg-[var(--origami-medium-gray)] transition-colors duration-200"
            style={{ borderRadius: '0 0 0 var(--radius-lg)' }}
          >
            <ChevronUp className="w-5 h-5" />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-bold)' }}>
              TOP
            </span>
          </button>
          <button
            onClick={scrollToBottom}
            className="flex-1 bg-[var(--origami-dark-gray)] text-white py-4 px-6 flex flex-col items-center gap-2 hover:bg-[var(--origami-medium-gray)] transition-colors duration-200 border-l border-[var(--origami-border-light)]"
            style={{ borderRadius: '0 0 var(--radius-lg) 0' }}
          >
            <ChevronDown className="w-5 h-5" />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--font-weight-bold)' }}>
              BOTTOM
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}