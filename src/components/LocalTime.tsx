'use client';

import { useEffect, useState } from 'react';

type Props = {
  timeZone: string;
  className?: string;
};

/** Live HH:MM:SS clock for a fixed time zone. Renders a placeholder until mounted. */
export default function LocalTime({ timeZone, className = '' }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <time className={className} dateTime={time ?? undefined} suppressHydrationWarning>
      {time ?? '--:--:--'}
    </time>
  );
}
