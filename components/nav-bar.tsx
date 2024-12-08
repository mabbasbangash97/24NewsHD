import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <nav className="bg-[#001B39] text-white p-4 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <button className="lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link href="/" className="flex items-center">
            <Image
              src="https://24newshd.tv/uploads/theme/logo-1580807238.png"
              alt="24NewsHD"
              width={60}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <Link href="#">MATCHES</Link>
            <Link href="#">RANKINGS</Link>
            <Link href="#">NEWS</Link>
            <Link href="#">VIDEOS</Link>
            <Link href="#">TEAMS</Link>
            <Link href="#">AWARDS</Link>
            <Link href="#">TRAVEL</Link>
            <Link href="#">SHOP</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="text-sm text-black hover:text-[#1f436d]"
          >
            SIGN IN
          </Button>
        </div>
      </div>
    </nav>
  );
}
