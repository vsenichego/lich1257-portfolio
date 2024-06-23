import Cube from '@/ui/cube/cube'
import NavLinks from '@/ui/main/nav-links'

export default function Home() {
  return (
    <main className="">
      <Cube />
      <div className="absolute z-50 bottom-0 right-0">
        <NavLinks />
      </div>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/4156ootD4iCa5Msxkv5M72?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </main>
  );
}