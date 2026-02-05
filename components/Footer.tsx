"use client";

import Link from "next/link";
import { userData } from "@/config/data";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="font-medium opacity-80">{userData.footer.text}</p>
        </div>

        <div className="flex gap-6">
          {userData.footer.links?.map((link, idx) => (
            <Link
              key={idx}
              href="#"
              className="text-white/60 hover:text-secondary transition-colors text-sm"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
