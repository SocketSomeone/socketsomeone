import AnimatedGradientText from '@/components/magicui/animated-gradient-text';
import { cn } from '@/utils';
import { ChevronRight } from 'lucide-react';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';

export default function Banner() {
  return (
    <a href="https://t.me/socketsomeoneshit"
       className="flex items-center truncate print:hidden">
      <AnimatedGradientText className="overflow-hidden ">
        🚀

        <div className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300 dark:bg-gray-700"/>
        {' '}

        <AnimatedShinyText>

        <span
          className={cn(
            `truncate inline animate-gradient bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          <b className="hidden sm:inline ">Announcement:</b> Subscribe to my blog!
        </span>
        </AnimatedShinyText>

        <ChevronRight
          className="ml-1 my-auto h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
      </AnimatedGradientText>
    </a>
  );
}
