"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { navLinks, socialLinks } from "@/constants";
import { ILink, ISocial } from "@/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react"; 

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/20 shadow-md">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-xl font-bold tracking-tight transition-colors">
            Azizbek<span className="text-purple-500">.Ikromov</span>
          </span>
          <Sparkles className="w-4 h-4 text-purple-400 group-hover:animate-spin" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-base font-medium">
          {navLinks.map((item: ILink) => (
            <Link
              href={pathname === "/allprojects" ? `/${item.link}` : item.link}
              key={item.title}
              className={cn(
                "transition-colors hover:text-purple-500 font-crete"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          {socialLinks.map((social: ISocial) => (
            <TooltipProvider key={social.link}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.link}
                    aria-label={social.name}
                    target="_blank"
                    className={cn(
                      (social.name === "Mail" || social.name === "Telegram") &&
                        "max-sm:hidden"
                    )}
                  >
                    <Button
                      aria-label={social.name}
                      variant="ghost"
                      size="icon"
                      className="rounded-full transition-colors hover:text-purple-500 hover:bg-purple-500/10"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
