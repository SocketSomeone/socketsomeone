import Star from '@/components/atoms/Star';
import { useTheme } from 'next-themes';

type Props = {
  stars?: number;
}

export default function StarsGrid({stars}: Props) {
  const {resolvedTheme} = useTheme();

  if (!stars || resolvedTheme !== 'dark') {
    return;
  }

  return (
    <div className="z-[-1]">
      {stars && new Array(stars).fill(stars).map((_, i) => <Star key={i}/>)}
    </div>
  );
}
