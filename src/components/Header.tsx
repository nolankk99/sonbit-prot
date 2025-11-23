import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onMenuClick: () => void;
  onPageChange?: (page: "home" | "greeting" | "login") => void;
}

export function Header({ onMenuClick, onPageChange }: HeaderProps) {
  return (
    <header className="bg-[var(--origami-white)] shadow-[var(--header-shadow)] sticky top-0 z-40">
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onPageChange?.("home")}
          >
            <div className="w-16 h-16 bg-[var(--origami-blue)] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">종</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl leading-tight" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                한국종이접기협회
              </h1>
              <p className="text-xs text-[var(--origami-text-tertiary)]">
                KOREA ORIGAMI ASSOCIATION
              </p>
            </div>
          </div>

          {/* Utility Menu & Search */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-3 text-sm text-[var(--origami-text-tertiary)]">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange?.("login");
                }}
                className="hover:text-[var(--origami-blue)] transition-colors cursor-pointer"
              >
                로그인
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[var(--origami-blue)] transition-colors">
                회원가입
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[var(--origami-blue)] transition-colors">
                사이트맵
              </a>
            </nav>

            <div className="relative hidden sm:block">
              <Input
                type="search"
                placeholder="검색"
                className="w-40 md:w-48 pr-10 bg-[var(--origami-white)] border-[var(--origami-border-default)]"
                style={{ borderRadius: 'var(--radius-sm)' }}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--origami-text-tertiary)]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
