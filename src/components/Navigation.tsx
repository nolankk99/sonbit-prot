import { ChevronDown } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    title: "협회소개",
    submenu: ["인사말", "협회연혁", "조직도", "찾아오시는 길"]
  },
  {
    title: "종이접기란",
    submenu: ["종이접기의 역사", "종이접기의 효과", "종이접기 용어"]
  },
  {
    title: "자격증안내",
    submenu: ["자격증 소개", "응시자격", "시험일정", "합격자 발표"]
  },
  {
    title: "교육프로그램",
    submenu: ["정규과정", "단기과정", "온라인 교육", "지도사 양성"]
  },
  {
    title: "열린마당",
    submenu: ["공지사항", "행사안내", "갤러리", "자료실"]
  },
  {
    title: "커뮤니티",
    submenu: ["자유게시판", "Q&A", "회원소식", "우리지역 배움터"]
  }
];

interface NavigationProps {
  isMobileMenuOpen: boolean;
  onClose: () => void;
  onPageChange?: (page: "home" | "greeting" | "login") => void;
  currentPage?: "home" | "greeting" | "login";
}

export function Navigation({ isMobileMenuOpen, onClose, onPageChange, currentPage = "home" }: NavigationProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const handleMenuClick = (menuItem: string) => {
    // 메뉴 항목에 따라 페이지 변경
    if (menuItem === "인사말") {
      onPageChange?.("greeting");
    } else if (menuItem === "로그인") {
      onPageChange?.("login");
    } else {
      onPageChange?.("home");
    }
    onClose();
  };

  // 현재 페이지에 해당하는 메뉴 항목 찾기
  const getActiveMenuIndex = () => {
    if (currentPage === "greeting") {
      // "인사말"은 "협회소개" 메뉴의 첫 번째 서브메뉴
      return 0; // 협회소개 인덱스
    }
    if (currentPage === "login") {
      // 로그인은 헤더에만 있으므로 null 반환
      return null;
    }
    return null; // home은 기본 페이지
  };

  const activeMenuIndex = getActiveMenuIndex();

  // 서브메뉴 항목이 활성화되어 있는지 확인
  const isSubmenuItemActive = (menuIndex: number, subItem: string) => {
    if (currentPage === "greeting" && menuIndex === 0 && subItem === "인사말") {
      return true;
    }
    if (currentPage === "login" && subItem === "로그인") {
      return true;
    }
    return false;
  };

  // 네비게이션 바에 호버하거나 인사말 페이지일 때만 메가메뉴 표시 (활성화된 메뉴 보여주기)
  const shouldShowMegaMenu = isNavHovered || currentPage === "greeting";

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className="hidden md:block bg-[var(--origami-blue)] text-white relative"
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div className="max-w-[var(--container-max-width)] mx-auto">
          <ul className="flex items-center relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex-1"
              >
                <button 
                  className={`w-full px-5 py-4 flex items-center justify-center gap-1 transition-colors ${
                    activeMenuIndex === index 
                      ? "bg-[var(--nav-hover-bg)] font-bold" 
                      : "hover:bg-[var(--nav-hover-bg)]"
                  }`}
                >
                  <span style={{ fontSize: 'var(--text-base)', fontWeight: activeMenuIndex === index ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)' }}>
                    {item.title}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mega Menu - 모든 서브메뉴를 한 번에 표시, 각 상위 메뉴 위치에 맞게 배치, 콘텐츠를 아래로 밀어냄 */}
        <div 
          className="w-full bg-white shadow-[var(--dropdown-shadow)] border-t border-[var(--origami-border-default)] overflow-hidden"
          style={{
            maxHeight: shouldShowMegaMenu ? '500px' : '0',
            opacity: shouldShowMegaMenu ? 1 : 0,
            transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="max-w-[var(--container-max-width)] mx-auto">
            <div className="flex">
              {menuItems.map((item, index) => (
                <div key={index} className="flex-1">
                  <div className="p-4">
                    <ul className="space-y-1">
                      {item.submenu.map((subItem, subIndex) => {
                        const isActive = isSubmenuItemActive(index, subItem);
                        return (
                          <li key={subIndex}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(subItem);
                                setIsNavHovered(false);
                              }}
                              className={`block px-3 py-2 rounded transition-colors duration-200 cursor-pointer ${
                                isActive
                                  ? "bg-[var(--origami-light-gray)] text-[var(--origami-blue)] font-bold"
                                  : "text-[var(--origami-text-secondary)] hover:bg-[var(--origami-light-gray)] hover:text-[var(--origami-blue)]"
                              }`}
                              style={{ fontSize: 'var(--text-sm)', fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)' }}
                            >
                              {subItem}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={onClose}>
          <div
            className="bg-white w-64 h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[var(--origami-blue)] text-white">
              <h2 className="text-lg" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                메뉴
              </h2>
            </div>
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-[var(--origami-border-light)]">
                  <button
                    className={`w-full px-4 py-3 flex items-center justify-between text-left transition-colors ${
                      activeMenuIndex === index
                        ? "bg-[var(--origami-light-gray)] font-bold"
                        : "hover:bg-[var(--origami-light-gray)]"
                    }`}
                    onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                  >
                    <span style={{ fontSize: 'var(--text-base)', fontWeight: activeMenuIndex === index ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)' }}>
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeSubmenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubmenu === index && (
                    <ul className="bg-[var(--origami-light-gray)]">
                      {item.submenu.map((subItem, subIndex) => {
                        const isActive = isSubmenuItemActive(index, subItem);
                        return (
                          <li key={subIndex}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(subItem);
                              }}
                              className={`block px-8 py-2 text-sm cursor-pointer transition-colors ${
                                isActive
                                  ? "text-[var(--origami-blue)] font-bold bg-white"
                                  : "hover:text-[var(--origami-blue)]"
                              }`}
                              style={{ fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)' }}
                            >
                              {subItem}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
