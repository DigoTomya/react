import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export default function Programacao() {
  return (
    <div className="flex justify-center items-center p-10">
      <Carousel opts={{ loop: true }}>
        <CarouselContent className="w-80 h-100">
            <CarouselItem>
              <img src="src\imagens\MoviePoster-7d3be42e-b110-4721-937f-05e7fcdb84a7.webp"></img>
            </CarouselItem>
            <CarouselItem>
              <img src="src\imagens\MoviePoster-605b11fb-ebcf-438d-ab94-ffcc481d4237.webp"></img>
            </CarouselItem>
            <CarouselItem>
              <img src="src\imagens\MoviePoster-97376958-dc2b-4049-9bf5-cc7d322e6b76.webp"></img>
            </CarouselItem>
            <CarouselItem>
              <img src="src\imagens\MoviePoster-f223d9c5-2a2e-4a4c-9161-0e779f5d9d70.webp"></img>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext/>
      </Carousel>
    </div>
  );
}
