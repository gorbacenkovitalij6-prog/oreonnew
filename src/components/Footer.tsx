import Link from 'next/link';
import { Send, MessageCircle, MessageSquare, Phone } from 'lucide-react';
import { trackEvent } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[#BF360C] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 pb-8 border-b border-white/20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-3xl font-bold text-white leading-none">ОРЕОН</div>
              <div className="text-[9px] font-semibold text-white tracking-[0.15em] uppercase mt-0.5">
                Авто из Европы
              </div>
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <Link href="/" className="hover:text-blue-400 transition-colors text-sm">
              Главная
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors text-sm">
              О нас
            </Link>
            <Link href="/team" className="hover:text-blue-400 transition-colors text-sm">
              Команда
            </Link>
            <Link href="/reviews" className="hover:text-blue-400 transition-colors text-sm">
              Отзывы
            </Link>
            <Link href="/catalog" className="hover:text-blue-400 transition-colors text-sm">
              Каталог
            </Link>
          </nav>

          <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto mt-4 md:mt-0">
            <a
              href="https://t.me/OreonAuto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('telegram_click')}
              className="w-10 h-10 md:w-12 md:h-12 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#0077b3] transition-all shadow-md hover:scale-105"
              title="Наш Telegram"
            >
              <Send className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>

            <a
              href={`https://wa.me/79010781895?text=${encodeURIComponent('Здравствуйте, я бы хотел получить консультацию по поводу покупки автомобиля')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click')}
              className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20bd5a] transition-all shadow-md hover:scale-105"
              title="Написать в WhatsApp"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>

            <a
              href="https://max.ru/u/f9LHodD0cOJRmcGfUattqeP_c6xzva2I4LSd0PbjxbCssFoIBdEz3vGOUFk"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('messenger_click')}
              className="w-10 h-10 md:w-12 md:h-12 bg-[#0077FF] rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-all shadow-md hover:scale-105"
              title="Написать в MAX"
            >
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>

            <a
              href="tel:+74951780340"
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-md hover:scale-105"
              title="Позвонить нам"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#BF360C]" />
            </a>
          </div>
        </div>

        {/* Bottom section with contact info */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-3 text-white/60">Адрес</h3>
            <p className="text-sm">
              160019, Вологодская область,<br />
              город Вологда, ул. Старое шоссе, д.18
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-3 text-white/60">Телефон</h3>
            <a
              href="tel:+74951780340"
              className="text-sm hover:text-blue-400 transition-colors block"
              title="Позвонить нам"
            >
              +7 (495) 178-03-40
            </a>

            <h3 className="font-bold mt-4 mb-3 text-white/60">Электронная почта</h3>
            <a
              href="mailto:ooo.oreongroups@mail.ru"
              className="text-sm hover:text-blue-400 transition-colors block"
              title="Написать нам"
            >
              ooo.oreongroups@mail.ru
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-3 text-white/60">Реквизиты</h3>
            <div className="text-sm space-y-1">
              <p>ОГРН 1133525021310</p>
              <p>ИНН 3525313619</p>
              <p>КПП 352501001</p>
              <p>ОКПО 10571608</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center flex flex-col gap-3">
          <p className="text-sm text-white/80">
            Все права защищены © 2026
          </p>
          <p className="text-[10px] text-white/50 max-w-3xl mx-auto leading-relaxed">
            * Компания Meta Platforms Inc., владеющая социальными сетями Facebook и Instagram, признана экстремистской организацией и её деятельность запрещена на территории РФ.
          </p>
        </div>
      </div>
    </footer>
  );
}
