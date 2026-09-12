"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Song = {
  title: string;
  artist: string;
  src: string;
};

const galleryImages = [
  {
    src: "/images/1(1).jpg",
    alt: "Momen manis bersama",
    message: "Di setiap senyummu, aku selalu menemukan alasan baru untuk bersyukur. ♡",
  },
  {
    src: "/images/2.jpg",
    alt: "Kenangan jalan bersama",
    message: "Tempatnya mungkin biasa saja, tapi bersamamu semuanya terasa istimewa.",
  },
  {
    src: "/images/3.jpg",
    alt: "Senyum favoritku",
    message: "Senyum ini adalah salah satu hal paling indah yang pernah aku lihat.",
  },
  {
    src: "/images/4.jpg",
    alt: "Hari yang bahagia",
    message: "Semoga kita selalu punya alasan untuk tertawa bersama seperti ini.",
  },
  {
    src: "/images/5.jpg",
    alt: "Momen kecil yang berharga",
    message: "Kenangan kecil bersama kamu selalu punya tempat besar di hatiku.",
  },
  {
    src: "/images/6.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/7.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/8.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/9.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/10.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/11.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/12.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/13.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/14.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/15.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/16.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/17.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/18.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/19.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/20.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/21.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/22.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/23.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/24.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/25.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/26.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/27.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/28.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/29.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/30.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/31.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/32.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/33.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/34.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/35.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/36.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/37.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/38.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/39.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/40.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/41.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/42.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/43.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/44.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/45.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
  {
    src: "/images/46.jpg",
    alt: "Kenangan yang ingin disimpan",
    message: "Kalau bisa, aku ingin menyimpan hari-hari seperti ini lebih lama lagi.",
  },
];

const songs: Song[] = [
  { title: "A Thousand Years", artist: "Christina Perri", src: "/audio/Christina-Perri-A-Thousand-Years.mp3" },
  { title: "Who Knows", artist: "Daniel Caesar", src: "/audio/Daniel-Caesar-Who-Knows.mp3" },
  { title: "The One That Got Away", artist: "Katy Perry", src: "/audio/Katy-Perry-The-One-That-Got-Away.mp3" },
  { title: "Alamak", artist: "Rizky Febian & Adrian Khalif", src: "/audio/Rizky-Febian&Adrian-Khalif-Alamak.mp3" },
  { title: "Maafkan", artist: "Slank", src: "/audio/Slank-Maafkan.mp3" },
];

const backgroundFlowers = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  icon: ["🌸", "🌷", "💮", "✿"][index % 4],
  left: `${(index * 13) % 100}%`,
  delay: `${(index % 10) * -1.5}s`,
  duration: `${9 + (index % 7)}s`,
  size: `${14 + (index % 4) * 6}px`,
}));

const distanceInfo = {
  yourLocation: "Jl. Kelapa Sawit",
  partnerLocation: "Jl. Kelapa Sawit",
  distance: "100 m",
};

const fallingItems = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  icon: ["🌸", "🌷", "💗", "✿"][index % 4],
  left: `${(index * 17) % 100}%`,
  delay: `${(index % 8) * -1.8}s`,
  duration: `${10 + (index % 6) * 1.5}s`,
  size: `${15 + (index % 4) * 5}px`,
}));

const loveBurstFlowers = Array.from({ length: 24 }, (_, index) => {
  const angle = (index / 24) * Math.PI * 2;
  const distance = 90 + (index % 5) * 20;

  return {
    id: index,
    icon: ["🌸", "🌷", "💮", "✿"][index % 4],
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    delay: `${(index % 4) * 0.05}s`,
  };
});

export default function RomanticLanding() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isLoveBurstVisible, setIsLoveBurstVisible] = useState(false);
  const handleLoveClick = () => {
      setIsLoveBurstVisible(true);
      window.setTimeout(() => {
        setIsLoveBurstVisible(false);
        setIsLetterOpen(false);
      }, 1600);
    };
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song>(songs[0]);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryImages)[number] | null>(null);
  const [audioError, setAudioError] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLetterOpen(false);
        setIsPlaylistOpen(false);
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLetterOpen || selectedPhoto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLetterOpen, selectedPhoto]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
      setAudioError("");
    } catch {
      setAudioError("Lagu belum dapat diputar. Coba tekan tombol play sekali lagi.");
    }
  };

  const changeSong = async (song: Song) => {
    const audio = audioRef.current;
    if (!audio) return;

    const shouldPlay = !audio.paused;
    audio.pause();
    audio.src = song.src;
    audio.load();

    setSelectedSong(song);
    setIsPlaylistOpen(false);
    setAudioError("");

    if (shouldPlay) {
      try {
        await audio.play();
      } catch {
        setAudioError("Lagu dipilih, tekan play untuk memulainya.");
      }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8f7] text-[#684b65]">
      <audio
        ref={audioRef}
        src={selectedSong.src}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setAudioError("File lagu tidak dapat ditemukan atau diputar.")}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {backgroundFlowers.map((flower) => (
          <span
            key={flower.id}
            className="background-flower absolute -top-12 select-none"
            style={{
              left: flower.left,
              animationDelay: flower.delay,
              animationDuration: flower.duration,
              fontSize: flower.size,
            }}
          >
            {flower.icon}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {fallingItems.map((item) => (
          <span
            key={item.id}
            className="falling-flower absolute -top-12 select-none"
            style={{ left: item.left, animationDelay: item.delay, animationDuration: item.duration, fontSize: item.size }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-5 rounded-full bg-white/70 px-5 py-2 text-xs font-bold tracking-[0.24em] text-[#af7699] shadow-sm sm:text-sm">
          MADE WITH ALL MY LOVE ♡
        </p>

        <div className="relative mb-8">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[#e7d3f0] blur-xl" />
          <div className="relative rotate-2 rounded-[2rem] border-8 border-white bg-white p-2 shadow-2xl transition duration-500 hover:rotate-0">
            <Image
              src="/images/cover-2.JPG"
              alt="Foto wanita tercantik di dunia"
              width={520}
              height={620}
              priority
              sizes="(max-width: 640px) 270px, 360px"
              className="h-[340px] w-[270px] rounded-[1.5rem] object-cover sm:h-[440px] sm:w-[360px]"
            />
          </div>
          <span className="absolute -left-8 top-5 text-4xl" aria-hidden="true">🌸</span>
          <span className="absolute -right-7 bottom-3 text-4xl" aria-hidden="true">💗</span>
        </div>

        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-[#8d5e7a] sm:text-6xl">
          To the prettiest girl
          <span className="block text-[#c887a8]">in the world...</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#765f73] sm:text-lg">
          Di antara semua hal indah yang pernah terjadi, kamu tetap menjadi favoritku. Terima kasih sudah membuat setiap hari terasa lebih hangat.
        </p>
        <button
          type="button"
          onClick={() => setIsLetterOpen(true)}
          className="mt-9 rounded-full bg-[#c887a8] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ae6e91] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#f1c9da]"
        >
          Buka surat kecil ini 💌
        </button>
        <p className="mt-5 text-sm text-[#aa8b9d]">Biar lebih asik bacanya sambil denger lagu piw,ada beberapa lagu tapi gak banyak sih tombol nya ada di pojok kanan bawah ya.</p>
      </section>
      
      {/* Galeri Foto */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-11 text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-[#c887a8]">OUR LITTLE MEMORIES</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-[#8d5e7a] sm:text-5xl">Potongan bahagia kita ✨</h2>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-[#765f73]">Beberapa momen kecil yang selalu ingin aku simpan selamanya.</p>
        </div>

        <div className="grid grid-cols-4 gap-4 sm:grid-cols-3 sm:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedPhoto(image)}
              aria-label={`Buka foto: ${image.alt}`}
              className={`group relative overflow-hidden rounded border-4 border-pink-300 bg-white shadow-md transition duration-300 hover:z-10 hover:scale-105 hover:rotate-12 hover:shadow-xl ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[4deg]"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-[#8d5e7a]/70 px-3 py-2 text-center text-xs font-medium text-white backdrop-blur-sm transition duration-300 group-hover:translate-y-0">
                Tap atau Klik untuk baca yahh ♡
              </span>
            </button>
          ))}
        </div>
      </section>
      {/* Galeri Foto */}

      {/* Kartu Ucapan */}
      <section className="relative z-10 px-6 pb-16 pt-8 text-center">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-[#f1e5f4]/80 px-7 py-12 shadow-sm sm:px-14">
          <p className="text-4xl" aria-hidden="true">🧸</p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#8d5e7a]">You are my favorite place.</h2>
          <p className="mt-4 leading-7 text-[#765f73]">Terima kasih udah menjadi bagian dari hidup gua yang flat ini. Hari-hari gua jaddi lebih bewarna sejak pertama kali gua liat lu, kadang dibikin deg-degan, salting, kangen, sedih kaya permen nano-nano deh banyak rasanya hehehehee.. </p>
          <br />
          <p className="mt-4 leading-7 text-[#765f73]">Dan kamu adalah perempuan yang pengen aku kalahin dalam hal yang paling rajin buat pendidikan, kerja atau hal apapun itu :). <br /> ASELI SUMPAH NGGA BOHONG.</p>
        </div>
      </section>
      {/* Kartu Ucapan */}

      {/* Kartu Ucapan */}
      <section className="relative z-10 px-6 pb-8 pt-8 text-center">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-[#D4E5FF]/80 px-7 py-12 shadow-sm sm:px-14">
          <div className="relative mx-auto grid max-w-2xl grid-cols-[1fr_auto_1fr] items-center justify-center gap-3 sm:gap-6">
            <h2 className="mt-4 font-serif text-3xl font-semibold text-[#8d5e7a]">Bumi memiliki banyak orang hebat <p className="font-extrabold text-4xl text-pink-500">SAFIRA</p> salah satunya</h2>
            
            <Image 
              src="/images/bumi1.png" 
              alt="Foto Bumi" 
              width={300}       // Sesuaikan dengan lebar asli/keinginan gambar Anda
              height={200}      // Sesuaikan dengan tinggi asli/keinginan gambar Anda
              className="rounded-lg object-cover" // Anda bisa menambahkan class Tailwind di sini
            />
          </div>
        </div>
      </section>
      {/* Kartu Ucapan */}

      {/* Jarak Rumah Kita */}
      <section className="relative z-10 px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#f8deea] via-[#fff8f7] to-[#e9ddf4] px-6 py-10 text-center shadow-lg sm:px-12 sm:py-14">
          <p className="text-xs font-bold tracking-[0.22em] text-[#c887a8] uppercase">
            Distance can't change anything.
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#8d5e7a] sm:text-5xl">
            Jarak rumah kita
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#765f73]">
            Gak kuat rasanya kalo aku berjauhan kaya gini piw. Ingin segera ketemu dan peluk kamu erat-erat. Tapi aku yakin, jarak ini cuma bikin kita makin sayang satu sama lain.
          </p>

          <div className="relative mx-auto mt-10 grid max-w-2xl grid-cols-[1fr_auto_1fr] items-center justify-center gap-3 sm:gap-6">
            <div className="relative z-10 rounded-2xl bg-white/80 px-3 py-4 shadow-sm sm:px-6">
              <p className="text-3xl">📍</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-[#b87d9d]">
                AKU DI
              </p>
              <p className="mt-1 truncate font-serif text-lg font-bold text-[#8d5e7a] sm:text-xl">
                {distanceInfo.yourLocation}
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <span className="absolute left-1/2 top-1/2 -z-10 hidden h-px w-[calc(100vw-6rem)] max-w-[32rem] -translate-x-1/2 bg-[#dba4bd] sm:block" />

              <div className="rounded-full border-4 border-white bg-[#c887a8] px-3 py-3 text-center text-white shadow-md sm:px-5">
                <span className="block text-4xl">💗</span>
                <span className="mt-1 block whitespace-nowrap text-[10px] font-bold sm:text-xs">
                  {distanceInfo.distance}
                </span>
              </div>
            </div>

            <div className="relative z-10 rounded-2xl bg-white/80 px-3 py-4 shadow-sm sm:px-6">
              <p className="text-3xl">📍</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-[#b87d9d]">
                KAMU DI
              </p>
              <p className="mt-1 truncate font-serif text-lg font-bold text-[#8d5e7a] sm:text-xl">
                {distanceInfo.partnerLocation}
              </p>
            </div>
          </div>

          <p className="mt-9 font-serif text-lg italic text-[#a46d8b]">
            Jauh di mata, dekat di hati.
          </p>
        </div>
      </section>
      {/* Jarak Rumah Kita */}

      {/* Penutup */}
      <section className="relative z-10 overflow-hidden px-6 pb-24 pt-10 text-center">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-gradient-to-br from-[#ffdbe9] via-[#fff8f7] to-[#e7d8f4] px-7 py-14 shadow-xl sm:px-14">
          <span className="absolute left-8 top-8 animate-bounce text-3xl">💗</span>
          <span
            className="absolute right-10 top-12 animate-bounce text-3xl"
            style={{ animationDelay: "0.5s" }}
          >
            🌸
          </span>
          <span
            className="absolute bottom-9 left-12 animate-pulse text-3xl"
            style={{ animationDelay: "1s" }}
          >
            ✨
          </span>
          <span className="absolute bottom-8 right-10 animate-pulse text-3xl">
            💕
          </span>

          <div className="wiggle mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#c887a8] text-5xl shadow-lg">
            🧸
          </div>

          <p className="mt-7 text-xs font-bold tracking-[0.24em] text-[#b87d9d]">
            ONE LAST THING...
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#8d5e7a] sm:text-5xl">
            My Love, My Safira, My Everything
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#765f73]">
            Terima kasih sudah menjadi bagian paling lucu, paling hangat, dan paling indah dari cerita hidupku. 
          </p>

          <div className="mt-8 flex justify-center gap-2 text-3xl">
            <span className="animate-bounce">💗</span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              💕
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              💗
            </span>
          </div>

          <a href="#top" className="mt-9 inline-flex rounded-full bg-[#c887a8] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#ae6e91]">
            Ulangi cerita kita ↑
          </a>
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)]">
        <div className="flex items-center gap-2 rounded-2xl border border-white/70 bg-[#cda1bb]/90 p-2 text-white shadow-lg backdrop-blur">
          <button
            type="button"
            onClick={toggleMusic}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-lg transition hover:scale-105 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
          >
            <span className={isPlaying ? "animate-pulse" : ""}>{isPlaying ? "♫" : "▷"}</span>
          </button>
          <div className="min-w-0 pr-1">
            <p className="max-w-36 truncate text-xs font-semibold">{selectedSong.title}</p>
            <button
              type="button"
              onClick={() => setIsPlaylistOpen((isOpen) => !isOpen)}
              className="mt-0.5 flex items-center gap-1 text-xs text-white/85 transition hover:text-white focus:outline-none"
              aria-expanded={isPlaylistOpen}
              aria-controls="love-playlist"
            >
              Pilih lagu
              <span className={`transition-transform ${isPlaylistOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
          </div>
        </div>

        {isPlaylistOpen && (
          <div id="love-playlist" className="absolute bottom-[calc(100%+0.6rem)] right-0 w-64 overflow-hidden rounded-2xl border border-white/70 bg-[#fffaf8] p-2 shadow-xl">
            <p className="px-3 py-2 text-xs font-bold tracking-wider text-[#b87d9d]">PLAYLIST KITA ♡</p>
            {songs.map((song, index) => {
              const isSelected = selectedSong.src === song.src;
              return (
                <button
                  key={song.src}
                  type="button"
                  onClick={() => changeSong(song)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-[#f6e1eb] ${isSelected ? "bg-[#f3d4e1]" : "text-[#684b65]"}`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c887a8] text-xs font-bold text-white">{index + 1}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{song.title}</span>
                    <span className="block truncate text-xs text-[#a47f96]">{song.artist}</span>
                  </span>
                  {isSelected && <span className="ml-auto text-[#b36c91]">♫</span>}
                </button>
              );
            })}
          </div>
        )}

        {audioError && (
          <p className="absolute bottom-[calc(100%+0.6rem)] right-0 w-64 rounded-xl bg-white px-3 py-2 text-xs leading-5 text-[#8d5e7a] shadow-lg">
            {audioError}
          </p>
        )}
      </div>
      {/* Penutup */}

      {/* Jika dibuka pesannya */}
      {isLetterOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#553b52]/40 p-5 backdrop-blur-sm"
          onClick={() => setIsLetterOpen(false)}
          role="presentation" >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-title"
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border-4 border-white bg-[#fffaf8] p-7 text-center shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Bunga berhamburan: ada di DALAM dialog */}
            {isLoveBurstVisible && (
              <div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                aria-hidden="true"
              >
                {loveBurstFlowers.map((flower) => (
                  <span
                    key={flower.id}
                    className="love-flower-burst absolute left-1/2 top-1/2 text-3xl"
                    style={
                      {
                        "--burst-x": `${flower.x}px`,
                        "--burst-y": `${flower.y}px`,
                        animationDelay: flower.delay,
                      } as React.CSSProperties
                    }
                  >
                    {flower.icon}
                  </span>
                ))}
              </div>
            )}

            {/* Tombol tutup harus di atas bunga */}
            <button
              type="button"
              onClick={() => setIsLetterOpen(false)}
              className="absolute right-5 top-4 z-30 text-2xl text-[#b87d9d]"
              aria-label="Tutup surat"
            >
              ×
            </button>

            {/* Semua isi surat berada di atas bunga */}
            <div className="relative z-10">
              <p className="text-4xl">💌</p>

              <p className="mt-4 text-xs font-bold tracking-[0.22em] text-[#c887a8]">
                A LETTER FOR YOU
              </p>

              <h2
                id="letter-title"
                className="mt-3 font-serif text-3xl font-bold text-[#8d5e7a]"
              >
                Untuk kamu, sayangku.
              </h2>

              <p className="mt-6 text-center leading-8 text-[#765f73]">
                Aku ngga pinter buat bikin kata-kata, tapi aku selalu ingin kamu tahu satu hal kehadiranmu membuat hidupku jauh lebih indah. Terima kasih karena sudah menjadi rumah, tawa, dan kebahagiaan kecilku. 
                <br />
                Aku sayang sama kamu, hari ini, besok, dan seterusnya. ♡
                <br /> 
                Walaupun aku buat ini kayanya masih ga mempang buat kamu hehehe.
              </p>

              <button
                type="button"
                onClick={handleLoveClick}
                disabled={isLoveBurstVisible}
                className="mt-8 rounded-full bg-[#c887a8] px-6 py-3 font-bold text-white transition hover:bg-[#ae6e91] disabled:opacity-70"
              >
                {isLoveBurstVisible ? "Sending love... ♡" : "I love you too ♡"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Jika dibuka pesannya */}

      {/* Jika dibuka gambarnya */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#553b52]/50 p-5 backdrop-blur-sm" onClick={() => setSelectedPhoto(null)} role="presentation">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="photo-message-title"
            className="relative w-full max-w-sm animate-[popIn_.35s_ease-out] overflow-hidden rounded-[2rem] border-4 border-white bg-[#fffaf8] shadow-2xl"
            onClick={(event) => event.stopPropagation()}>

            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-2xl text-[#8d5e7a] shadow transition hover:scale-110 focus:outline-none"
              aria-label="Tutup foto"
            >
              ×
            </button>

            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={800}
              height={1067}
              sizes="(max-width: 640px) calc(100vw - 2.5rem), 384px"
              className="max-h-[58vh] w-full object-cover"/>

            <div className="px-6 py-6 text-center">
              <p className="text-xs font-bold tracking-[0.18em] text-[#c887a8]">A LITTLE MEMORY</p>
              <h2 id="photo-message-title" className="mt-2 font-serif text-2xl font-bold text-[#8d5e7a]">
                {selectedPhoto.alt}
              </h2>
              <p className="mt-3 leading-7 text-[#765f73]">{selectedPhoto.message}</p>
            </div>
          </div>
        </div>
      )}
      {/* Jika dibuka gambarnya */}
    </main>
  );
}
