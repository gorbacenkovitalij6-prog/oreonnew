"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || pathname?.startsWith('/login');

  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div className="antialiased flex flex-col min-h-screen">
      {!isAdminPage && <Header />}
      <main className="flex-grow mt-[74px]">
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}
