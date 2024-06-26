import Cube from '@/ui/cube/cube'
import MainNavLinks from '@/ui/navigation/mainNavLinks'

export default function Home() {
  return (
    <main className="w-full h-full m-auto">
      <Cube />
      <div className="absolute bottom-0 right-0 z-50">
        <MainNavLinks />
      </div>
    </main>
  );
}