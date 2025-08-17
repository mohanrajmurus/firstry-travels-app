"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import { TEMPLES_COVERED } from "../constants";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), {
  ssr: false,
});

const swiperModules = dynamic(() => 
  import("swiper/modules").then((mod) => ({
    default: [mod.Pagination, mod.Navigation, mod.Keyboard, mod.Mousewheel]
  })), 
  { ssr: false }
);

const TempleCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="shadow-md rounded-lg bg-white">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover  rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-lg text-heading font-medium ">{title}</p>
        <p className="text-paragraph line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export const Temples = () => {
  const [modules, setModules] = React.useState<any[]>([]);

  React.useEffect(() => {
    import("swiper/modules").then((mod) => {
      setModules([mod.Pagination, mod.Navigation, mod.Keyboard, mod.Mousewheel]);
    });
  }, []);

  return (
    <div className="container mx-auto py-10" id="temples">
      <p className="text-heading text-2xl lg:text-4xl font-semibold text-center mb-10">
        Temples Covered
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={modules}
        className="mySwiper mb-10"
        loop={true}
        autoplay={{ delay: 2000 }}
        keyboard={true}
        mousewheel={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {TEMPLES_COVERED.map((temple, index) => (
          <SwiperSlide key={index}>
            <TempleCard
              title={temple.title}
              description={temple.description}
              image={temple?.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
