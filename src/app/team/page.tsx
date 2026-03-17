'use client';

import { Button } from '@/components/ui/button';
import { Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Андрей Игоревич',
      image: 'https://i.ibb.co/bjNBwTnK/photo-2026-02-13-15-50-56.jpg'
    },
    {
      name: 'Юрий Владимирович',
      image: 'https://i.ibb.co/jvZbqk5n/photo-2026-02-13-15-51-11.jpg'
    },
    {
      name: 'Виктор Васильевич',
      image: 'https://i.ibb.co/WvzNYTqS/photo-2026-02-13-15-51-15.jpg'
    },
    {
      name: 'Роман Сергеевич',
      image: 'https://i.ibb.co/4Zhk2DwD/photo-2026-02-13-15-51-19.jpg'
    },
    {
      name: 'Михаил Андреевич',
      image: 'https://i.ibb.co/99tPWVZP/photo-2026-02-13-15-51-24.jpg'
    },
    {
      name: 'Смирнов Артём',
      image: 'https://i.ibb.co/0RmH9Fg3/photo-2026-02-13-15-51-27.jpg'
    },
    {
      name: 'Иван Алексеевич',
      image: 'https://i.ibb.co/CqF3bB8/photo-2026-02-13-15-51-31.jpg'
    },
    {
      name: 'Алексей Александрович',
      image: 'https://i.ibb.co/dw239xSw/photo-2026-02-13-15-51-34.jpg'
    },
    {
      name: 'Андрей Евгеньевич',
      image: 'https://i.ibb.co/39dM8DnT/photo-2026-02-13-15-51-38.jpg'
    },
    {
      name: 'Александр Петрович',
      image: 'https://i.ibb.co/232vM00R/photo-2026-02-13-15-51-41.jpg'
    },
    {
      name: 'Сергей Владимирович',
      image: 'https://i.ibb.co/FkDmPZ27/photo-2026-02-13-15-51-44.jpg'
    },
    {
      name: 'Владимир Валерьевич',
      image: 'https://i.ibb.co/JjVwRGBc/photo-2026-02-13-15-51-48.jpg'
    },
    {
      name: 'Михаил Сергеевич',
      image: 'https://i.ibb.co/XfJRxK9x/photo-2026-02-13-15-51-51.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section with Diagonal Stripes */}
      <section className="relative bg-[#BF360C] overflow-hidden">
        {/* Diagonal Stripes Pattern */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-full flex">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-full bg-[#D84315] transform skew-x-[-20deg] origin-top-left"
                style={{
                  width: '80px',
                  marginLeft: i % 2 === 0 ? '40px' : '0px',
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 px-8 py-8">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-5xl font-bold text-white">КОМАНДА</h1>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          {/* First member - centered */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-4 border-4 border-[#BF360C]">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] text-center">
                {teamMembers[0].name}
              </h3>
            </div>
          </div>

          {/* Rest of the team - 4 columns grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] text-center">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
