import Cube from '@/ui/cube/cube'
import MainNavLinks from '@/ui/navigation/MainNavLinks'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Cube />
      <div className="absolute top-0 right-0 w-full">
        <MainNavLinks />
      </div>
    </div>
  );
}