"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const words = [
  ["you mean everything", "left-[9%] top-[12%] text-[26px] md:text-[42px]"],
  ["only you", "left-[31%] top-[27%] text-[21px] md:text-[32px]"],
  ["stay with me", "left-[7%] top-[43%] text-[20px] md:text-[30px]"],
  ["always on my mind", "left-[5%] top-[65%] text-[18px] md:text-[28px]"],
  ["you are enough", "left-[52%] top-[17%] text-[17px] md:text-[26px]"],
  ["forever", "left-[68%] top-[31%] text-[19px] md:text-[29px]"],
  ["i love you", "left-[31%] top-[79%] text-[19px] md:text-[30px]"],
  ["my safe place", "left-[59%] top-[85%] text-[18px] md:text-[29px]"],
  ["love u more", "left-[76%] top-[56%] text-[18px] md:text-[28px]"],
  ["thinking of u", "left-[42%] top-[53%] text-[15px] md:text-[23px]"],
  ["always with you", "left-[62%] top-[68%] text-[16px] md:text-[25px]"],
  ["i miss you", "left-[12%] top-[31%] text-[14px] md:text-[22px]"]
] as const;

const photos = [
  { src: "/images/p1.jpg", className: "left-[17%] top-[25%] w-[80px] md:w-[230px] rotate-[-2deg]", delay: "0s" },
  { src: "/images/p2.jpg", className: "left-[67%] top-[42%] w-[115px] md:w-[180px] rotate-[4deg]", delay: "1.5s" },
  { src: "/images/p3.jpg", className: "left-[20%] top-[5%] w-[92px] md:w-[135px] rotate-[3deg]", delay: "2.2s" },
  { src: "/images/p4.jpg", className: "left-[60%] top-[12%] w-[105px] md:w-[160px] rotate-[-5deg]", delay: ".8s" },
  { src: "/images/p5.jpg", className: "left-[10%] top-[70%] w-[92px] md:w-[140px] rotate-[2deg]", delay: "2.8s" },
  { src: "/images/41(1).jpg", className: "left-[15%] top-[45%] w-[92px] md:w-[140px] rotate-[2deg]", delay: "2.8s" },
  { src: "/images/cover-1.jpg", className: "left-[50%] top-[80%] w-[92px] md:w-[140px] rotate-[2deg]", delay: "2.8s" },
  { src: "/images/23.jpg", className: "left-[45%] top-[60%] w-[92px] md:w-[140px] rotate-[2deg]", delay: "2.8s" },
];

const flowerMeteors = [
  { left: "8%", top: "7%", delay: "0s", duration: "2.6s", icon: "🌸", size: "30px" },
  { left: "24%", top: "2%", delay: "0.5s", duration: "2.9s", icon: "🌼", size: "26px" },
  { left: "45%", top: "16%", delay: "1.5s", duration: "2.7s", icon: "💮", size: "24px" },
  { left: "67%", top: "12%", delay: "2s", duration: "2.9s", icon: "🌷", size: "30px" },
  { left: "80%", top: "6%", delay: "2.7s", duration: "2.4s", icon: "✿", size: "24px" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playPromise = audio.play();
    if (playPromise) {
      playPromise.catch(() => {
        setMuted(true);
      });
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        top: `${(i * 61) % 100}%`,
        size: 2 + (i % 3),
        delay: `${(i % 7) * 0.45}s`
      })),
    []
  );

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      try {
        await audio.play();
        setMuted(false);
      } catch {
        // Browser blocked playback; user can tap again.
      }
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  return (
    <main className="memory-bg noise relative min-h-screen overflow-hidden text-white">
      <a
        href="/"
        className="fixed left-6 top-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#8d5e7a] shadow-lg backdrop-blur transition hover:bg-[#ffeaf3] hover:text-[#b36c91]">
        <span aria-hidden="true">←</span>
        Back to Home
      </a>

      <audio ref={audioRef} loop src="/audio/katy-perry-the-one-that-got-away_cut.mp3" />

      {loading && (
        <section className="fixed inset-0 z-50 grid place-items-center bg-[#050506]">
          <div className="w-[min(82vw,390px)] text-center">
            <div className="mb-8 text-5xl animate-pulse-glow">♥</div>
            <div className="mb-5 text-[11px] tracking-[.65em] text-pink-300/60">
              LOADING MEMORIES
            </div>
            <div className="mx-auto h-px w-full overflow-hidden bg-pink-300/15">
              <div className="h-full animate-load-bar bg-pink-400" />
            </div>
            <div className="mt-5 flex justify-center gap-2 text-pink-400">
              <span className="animate-bounce">•</span>
              <span className="animate-bounce [animation-delay:150ms]">•</span>
              <span className="animate-bounce [animation-delay:300ms]">•</span>
            </div>
          </div>
        </section>
      )}

      <div className="pointer-events-none absolute inset-0 vignette" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {flowerMeteors.map((flower, i) => (
          <span
            key={i}
            className="flower-meteor"
            style={{
              left: flower.left,
              top: flower.top,
              animationDelay: flower.delay,
              animationDuration: flower.duration,
              fontSize: flower.size,
            }}
          >
            {flower.icon}
          </span>
        ))}
      </div>

      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/20 blur-[1px] animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay
          }}
        />
      ))}

      <div className="absolute inset-0 min-h-screen">
        {words.map(([text, classes], i) => (
          <span key={i} className={`word ${classes}`}>
            {text}
          </span>
        ))}

        {photos.map((photo, i) => (
          <div
            key={i}
            className={`photo absolute aspect-square overflow-hidden rounded-3xl bg-white/5 animate-float ${photo.className}`}
            style={{ animationDelay: photo.delay }}
          >
            <img
              src={photo.src}
              alt=""
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/35" />

      <button
        onClick={toggleMusic}
        aria-label={muted ? "Play music" : "Pause music"}
        className="music-ring fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full bg-black/45 text-xl backdrop-blur-md transition hover:scale-105 active:scale-95"
      >
        {muted ? "♫" : "♪"}
      </button>

      <div className="pointer-events-none fixed bottom-5 left-1/2 z-20 -translate-x-1/2 text-[9px] tracking-[.35em] text-white/20">
        MADE WITH LOVE
      </div>
    </main>
  );
}