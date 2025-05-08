import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-36 md:pb-32 container px-4 mx-auto"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <Badge className="mb-5 px-4 py-2 text-sm bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors rounded-full">
          Available for work
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-crete bg-gradient-to-r from-purple-700 to-purple-400 dark:from-white dark:to-purple-400 bg-clip-text text-transparent leading-tight mb-3">
          Hi, I am Azizbek Ikromov
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight font-crete text-gray-900 dark:text-white mb-6">
          Frontend Developer
        </h2>

        <p className="text-base md:text-lg text-muted-foreground dark:text-white/70 max-w-2xl mb-10 leading-relaxed">
          I am a graduate of Najot Talim and a high school student. I bring an
          individual approach to every project — prioritizing clean design,
          smooth functionality, and user-friendly experiences.
        </p>


        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/resume/Azizbek_Ikromov_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="group transition-all duration-200">
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </a>
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
