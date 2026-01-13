import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F1</span>
          </div>
          <span className="font-roboto font-bold text-lg hidden sm:inline">F1 25 Master Guide</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/tracks" className="text-sm font-medium hover:text-primary transition">
            Pistas
          </Link>
          <Link href="/driving-tips" className="text-sm font-medium hover:text-primary transition">
            Dicas
          </Link>
          <Link href="/cars" className="text-sm font-medium hover:text-primary transition">
            Carros
          </Link>
        </div>
      </div>
    </nav>
  );
}
