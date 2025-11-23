import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "종이접기 작품 전시회",
    date: "2025.11.20 - 11.30",
    image: "https://images.unsplash.com/photo-1632850813798-a82c0db28767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwY3JhbmUlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NjMxNTU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "회원들의 우수 작품을 만나보세요"
  },
  {
    id: 2,
    title: "어린이 종이접기 체험",
    date: "2025.11.25",
    image: "https://images.unsplash.com/photo-1754169271290-e8b9f8829d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGZvbGRpbmclMjBjcmFmdHxlbnwxfHx8fDE3NjMxNTU4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "가족과 함께하는 즐거운 체험"
  },
  {
    id: 3,
    title: "종이접기 마스터 클래스",
    date: "2025.12.05",
    image: "https://images.unsplash.com/photo-1760035303523-825b45bd5cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjMxNTU4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "전문가와 함께하는 심화 과정"
  }
];

export function EventGallery() {
  return (
    <div className="bg-white border border-[var(--origami-border-default)] rounded-[var(--radius-base)] overflow-hidden"
      style={{ boxShadow: 'var(--shadow-base)' }}>
      <div className="bg-[var(--origami-magenta)] text-white px-5 py-4">
        <h3 className="flex items-center gap-2" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
          <Calendar className="w-5 h-5" />
          행사 안내
        </h3>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <a
              key={event.id}
              href="#"
              className="group border border-[var(--origami-border-default)] rounded-[var(--radius-base)] overflow-hidden hover:shadow-[var(--card-hover-shadow)] transition-all"
              style={{ borderStyle: 'dashed' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-[var(--origami-text-secondary)] mb-2 group-hover:text-[var(--origami-magenta)]"
                  style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)' }}>
                  {event.title}
                </h4>
                <p className="text-xs text-[var(--origami-text-tertiary)] mb-2">
                  {event.date}
                </p>
                <p className="text-sm text-[var(--origami-text-tertiary)]">
                  {event.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
