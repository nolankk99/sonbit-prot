import { ChevronRight, FileText } from "lucide-react";

interface Notice {
  id: number;
  title: string;
  date: string;
  isNew?: boolean;
}

const notices: Notice[] = [
  {
    id: 1,
    title: "2025년 종이접기 지도사 자격증 시험 일정 안내",
    date: "2025.11.10",
    isNew: true
  },
  {
    id: 2,
    title: "한국종이접기협회 정기총회 개최 공지",
    date: "2025.11.08",
    isNew: true
  },
  {
    id: 3,
    title: "종이접기 전국대회 참가 신청 접수 시작",
    date: "2025.11.05"
  },
  {
    id: 4,
    title: "겨울방학 특강 프로그램 안내",
    date: "2025.11.01"
  },
  {
    id: 5,
    title: "협회 홈페이지 리뉴얼 안내",
    date: "2025.10.28"
  }
];

export function NoticeList() {
  return (
    <div className="bg-white border border-[var(--origami-border-default)] rounded-[var(--radius-base)] overflow-hidden"
      style={{ boxShadow: 'var(--shadow-base)' }}>
      <div className="bg-[var(--origami-blue)] text-white px-5 py-4">
        <h3 className="flex items-center gap-2" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
          <FileText className="w-5 h-5" />
          공지사항
        </h3>
      </div>
      <ul>
        {notices.map((notice, index) => (
          <li
            key={notice.id}
            className={`group ${
              index !== notices.length - 1 ? 'border-b border-[var(--origami-border-light)]' : ''
            }`}
          >
            <a
              href="#"
              className="flex items-center justify-between px-5 py-4 hover:bg-[var(--origami-light-gray)] transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {notice.isNew && (
                  <span className="bg-[var(--origami-magenta)] text-white px-2 py-0.5 rounded text-xs shrink-0"
                    style={{ fontWeight: 'var(--font-weight-bold)' }}>
                    NEW
                  </span>
                )}
                <span className="text-[var(--origami-text-secondary)] group-hover:text-[var(--origami-blue)] truncate"
                  style={{ fontSize: 'var(--text-base)' }}>
                  {notice.title}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className="text-[var(--origami-text-tertiary)] text-xs hidden sm:inline">
                  {notice.date}
                </span>
                <ChevronRight className="w-4 h-4 text-[var(--origami-text-tertiary)] group-hover:text-[var(--origami-blue)]" />
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div className="px-5 py-3 bg-[var(--origami-light-gray)] text-center">
        <a
          href="#"
          className="text-sm text-[var(--origami-text-tertiary)] hover:text-[var(--origami-blue)] transition-colors inline-flex items-center gap-1"
        >
          전체보기
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
