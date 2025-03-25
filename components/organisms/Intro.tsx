import Avatar from '@/components/atoms/Avatar';
import Banner from '@/components/organisms/Banner';
import SocialLinksGroup from '@/components/molecules/SocialLinksGroup';
import BlurFade from '@/components/magicui/blur-fade';

export default function Intro() {
  const animationStep = 0.05;
  const animationDelay = 0.25;

  const calculateDelay = (step: number = 0) => animationDelay + step * animationStep;

  return (
    <div
      className="relative h-full flex flex-col text-center justify-center w-full mx-auto lg:w-2/3 space-y-4">

      <BlurFade delay={calculateDelay()} inView>
        <Avatar/>
      </BlurFade>

      <BlurFade delay={calculateDelay(1)} inView>
        <Banner/>
      </BlurFade>


      <BlurFade delay={calculateDelay(2)} inView>
        <h1
          className="text-3xl subpixel-antialiased sm:text-2xl md:text-4xl xl:text-6xl xl:leading-[70px] font-extrabold text-gray-900 dark:text-white">Hello,
          I’m <span
            className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-300">SocketSomeone</span> your <span
            className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">Software Engineer</span>
        </h1>
      </BlurFade>


      <BlurFade delay={calculateDelay(3)} inView>
        <p
          className="text-base md:text-xl subpixel-antialiased font-medium text-gray-500 dark:text-gray-300 leading-relaxed md:pb-8">You
          just
          found my profile! I&apos;m a
          kitten who loves coffee and bugs! <span
            className="whitespace-nowrap">( •̀ ω •́ )✧</span>
        </p>
      </BlurFade>

      <BlurFade delay={calculateDelay(4)} inView>
        <SocialLinksGroup/>
      </BlurFade>
    </div>
  );
}
