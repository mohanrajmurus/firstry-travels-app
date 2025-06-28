import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <section className="relative w-full h-[300px] lg:h-[500px]">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Image
          src={"/images/bannerTemple.png"}
          width={500}
          height={300}
          alt="kailasaTemple"
          className="w-full h-[300px] lg:h-[500px] object-fill"
        />
      </div>
      <div className="absolute top-5 lg:top-1/3 w-full flex flex-col items-center justify-center px-4 ">
        <p className="text-2xl text-btnText lg:text-5xl font-semibold text-center">
          Experience the Divine & the Design
        </p>
        <p className="text-btnText text-lg lg:text-xl font-medium mt-4 text-center">
          A One-Day Guided Trip to Kanchipuram’s Iconic Temples & Silk Weaving
          Streets with Firstry Travels!
        </p>
        <div className="flex justify-center mt-4 gap-x-4">
          <button className="bg-brand text-btnText px-4 py-2 rounded hover:bg-btnText hover:text-brand transition-colors duration-300 ease-in">
            Book Now
          </button>
          <button className="bg-btnText text-brand px-4 py-2 rounded border border-btnText hover:bg-brand hover:text-btnText hover:border-brand transition-colors duration-300 ease-in font-medium">
            Explore Itinerary{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
