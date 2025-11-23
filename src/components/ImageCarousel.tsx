import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const carouselImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1760035303523-825b45bd5cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwcGFwZXIlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjMxNTU4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "다채로운 종이접기의 세계",
    description: "창의력과 상상력을 키우는 종이접기"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1632850813798-a82c0db28767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwY3JhbmUlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NjMxNTU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "전통의 아름다움",
    description: "한국 종이접기의 우수성을 세계에"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1562173271-d50d773f4e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwYnV0dGVyZmx5JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzODY0MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "예술로 피어나는 종이",
    description: "작은 종이 한 장이 만드는 무한한 가능성"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1680796681732-ed0d5a7c3d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmlnYW1pJTIwZmxvd2VyJTIwYXJ0fGVufDF8fHx8MTc2Mzg2NDE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "손끝에서 탄생하는 생명",
    description: "종이접기로 만나는 자연의 아름다움"
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const currentImage = carouselImages[currentIndex];

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Images */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)] text-center text-white">
          <h2
            className="mb-4 drop-shadow-lg"
            style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 'var(--font-weight-bold)' }}
          >
            {currentImage.title}
          </h2>
          <p
            className="drop-shadow-lg max-w-2xl mx-auto"
            style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--line-height-relaxed)' }}
          >
            {currentImage.description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
