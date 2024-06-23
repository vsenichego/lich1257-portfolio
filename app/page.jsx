import Cube from '@/ui/cube/cube'
import NavLinks from '@/ui/main/nav-links'

export default function Home() {
  return (
    <main className="">
      <Cube />
      <div className="absolute z-50 bottom-0 right-0">
        <NavLinks />
      </div>
    </main>
  );
}