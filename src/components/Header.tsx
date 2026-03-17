'use client';

import Link from 'next/link';
import { Send, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#BF360C] shadow-md px-4 md:px-6 py-3">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col items-start">
            <div className="text-xl md:text-2xl font-bold text-white leading-none">ОРЕОН</div>
            <div className="text-[7px] md:text-[8px] font-semibold text-white tracking-[0.15em] uppercase mt-0.5">
              Авто из Европы
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-white text-sm">
          <Link href="/" className="hover:text-yellow-300 transition-colors font-medium">Главная</Link>
          <Link href="/about" className="hover:text-yellow-300 transition-colors font-medium">О нас</Link>
          <Link href="/team" className="hover:text-yellow-300 transition-colors font-medium">Команда</Link>
          <Link href="/reviews" className="hover:text-yellow-300 transition-colors font-medium">Отзывы</Link>
          <Link href="/catalog" className="hover:text-yellow-300 transition-colors font-medium">Каталог</Link>
        </nav>

        {/* Desktop Contact Buttons */}
        <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/OreonAuto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#0077b3] transition-colors"
              title="Наш Telegram канал"
            >
              <Send className="w-5 h-5 text-white" />
            </a>
            <a
              href="tel:+74951780340"
              className="flex items-center gap-2 bg-white text-[#BF360C] hover:bg-gray-100 px-4 py-2 rounded-full font-medium shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">+7 (495) 178-03-40</span>
            </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
              href="tel:+74951780340"
              className="w-10 h-10 flex items-center justify-center bg-white text-[#BF360C] hover:bg-gray-100 rounded-full font-medium shadow-sm transition-colors"
            >
             <MessageCircle className="w-5 h-5" />
          </a>
          <button 
            type="button" 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#BF360C] shadow-lg border-t border-white/10 px-4 py-4 flex flex-col gap-4">
           <nav className="flex flex-col gap-4 text-white text-base">
            <Link onClick={() => setIsMenuOpen(false)} href="/" className="hover:text-yellow-300 transition-colors font-medium">Главная</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/about" className="hover:text-yellow-300 transition-colors font-medium">О нас</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/team" className="hover:text-yellow-300 transition-colors font-medium">Команда</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/reviews" className="hover:text-yellow-300 transition-colors font-medium">Отзывы</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/catalog" className="hover:text-yellow-300 transition-colors font-medium">Каталог</Link>
          </nav>
           <a
              href="https://t.me/OreonAuto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 bg-[#0088cc] rounded-lg flex items-center justify-center gap-2 hover:bg-[#0077b3] transition-colors mt-2 text-white font-medium"
              title="Наш Telegram канал"
            >
              <Send className="w-5 h-5 text-white" />
              Наш Telegram
            </a>
        </div>
      )}
    </header>
  );
}
