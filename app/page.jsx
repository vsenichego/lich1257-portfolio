'use client'
import Cube from '@/ui/cube/cube'
import { MainNavigation } from '@/ui/navigation/MainNavigation'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Cube />
      <div className="absolute top-0 right-0 w-full">
        <MainNavigation />
      </div>
    </div>
  );
}