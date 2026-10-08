"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "./sections";

export default function OtherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
      <nav className="flex gap-3 font-mono text-xs md:flex-col md:gap-1">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`hover:text-yellow-400 ${
              pathname.startsWith(s.href) ? "text-yellow-400" : "opacity-60"
            }`}
          >
            {pathname.startsWith(s.href) ? "› " : ""}
            {s.title}
          </Link>
        ))}
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
}
