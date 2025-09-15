import { ChevronDown } from "lucide-react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { data } from "../../content/hero.json";

type Words = {
  text: string;
  className?: string;
};

const words: Words[] = [
  { text: "Hi! I'm", className: "max-sm:text-xl" },
  {
    text: "Erim.",
    className: "text-blue-600 dark:text-blue-600 max-sm:text-xl",
  },
  { text: "Welcome to my portfolio!", className: "max-sm:text-xl" },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        <TypewriterEffectSmooth words={words} />

        <p className="text-foreground/60 text-sm md:text-base">
          {data.content}
        </p>
      </div>

      <a href="#about" className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <ChevronDown className="stroke-foreground/40 size-10 transition ease-in-out hover:stroke-foreground animate-bounce" />
      </a>
    </section>
  );
}

export default HeroSection;
