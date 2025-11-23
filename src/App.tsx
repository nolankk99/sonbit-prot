import { useState } from "react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { ImageCarousel } from "./components/ImageCarousel";
import { QuickLinks } from "./components/QuickLinks";
import { NoticeList } from "./components/NoticeList";
import { EventGallery } from "./components/EventGallery";
import { SidebarWidgets } from "./components/SidebarWidget";
import { GreetingPage } from "./components/GreetingPage";
import { LoginPage } from "./components/LoginPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "greeting" | "login">("home");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header 
        onMenuClick={() => setIsMobileMenuOpen(true)} 
        onPageChange={setCurrentPage}
      />

      {/* Navigation */}
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />

      {/* Image Carousel - Only on home page */}
      {currentPage === "home" && <ImageCarousel />}

      {/* Main Content */}
      <main className="flex-1 py-10 bg-[var(--origami-light-gray)]">
        <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
          {currentPage === "home" ? (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main Content Area - Left Side */}
              <div className="flex-1 min-w-0 space-y-8">
                {/* Event Gallery */}
                <EventGallery />

                {/* Notice List */}
                <NoticeList />
              </div>

              {/* Sidebar Widgets - Right Side */}
              <div className="w-full lg:w-72 shrink-0">
                <SidebarWidgets />
              </div>
            </div>
          ) : (
            <div className="flex-1 min-w-0">
              {currentPage === "greeting" ? (
                <GreetingPage />
              ) : (
                <LoginPage />
              )}
            </div>
          )}
        </div>
      </main>

      {/* Quick Links - Fixed position, follows screen */}
      <QuickLinks onPageChange={setCurrentPage} />

      {/* Footer */}
      <Footer />
    </div>
  );
}