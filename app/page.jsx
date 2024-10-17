import Cube from '@/ui/cube/cube'

export default function Home() {
  return (
    <div className="w-full h-full">
      <Cube />
    </div>
  );
}

//fetch global settings and navigation data in getStaticProps for layout components.