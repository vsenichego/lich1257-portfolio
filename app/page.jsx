import Cube from '@/ui/cube/cube'
import MainNavLinks from '@/ui/navigation/mainNavLinks'

export default function Home() {
  return (
    <main>
      <Cube />
      <div className="absolute z-50 bottom-0 right-0">
        <MainNavLinks />
      </div>
    </main>
  );
}