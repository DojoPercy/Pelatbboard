import Image from "next/image";
import EmblaCarousel from "./_components/EmberSliders";
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true, duration: 100 }
export default function Home() {
  
  return (
    <main className="flex flex-col justify-start items-start w-full overflow-hidden">
     <EmblaCarousel slides={["/sliders/slider2.jpg", "/sliders/slider1.jpg"]} options={ OPTIONS} />
     <div className="h-[40vh] bg-white">

     </div>
    </main>
  );
}
