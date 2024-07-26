'use client'
import Cube from '@/ui/cube/cube'
import { NavAbout, NavContact, NavCategory } from '@/ui/navigation/Navigation'
import AudioMenu from '@/ui/navigation/AudioMenu';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Cube />
      <div className="absolute top-0 right-0 w-full">
        <nav className="relative w-full text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          <ul className="flex flex-row justify-center md:justify-start w-full mt-1.5 md:mt-3.5 py-1.5 md:first:pl-3.5 border-y border-white">
            <AudioMenu />
            <NavAbout />
            <NavContact />
            <NavCategory />
          </ul>
        </nav>
      </div>
    </div>
  );
}