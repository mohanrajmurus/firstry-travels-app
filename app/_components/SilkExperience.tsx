import Image from "next/image";
import React from "react";

export const SilkExperience = () => {
  return (
    <section className="bg-heading" id="silk-shopping">
      <div className=" container mx-auto py-5 lg:py-10">
        <p className="text-btnText text-2xl lg:text-4xl font-semibold text-center">
          Silk Shopping Experience
        </p>
        <div className="w-full flex flex-col lg:flex-row items-start gap-x-3 mt-10">
          <div className="w-full lg:w-2/3">
            <Image
              src="/images/silkexp.png"
              alt="Silk Experience"
              width={500}
              height={200}
              className="w-full h-[200px] rounded-lg"
            />
            <p className="text-btnText mt-4">
              Discover the art of Kanchipuram silk weaving, renowned for its
              quality and craftsmanship. Guests get exclusive access to genuine
              sellers, ensuring authentic purchases without middlemen.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            <Image
              src="/images/silkexp.png"
              alt="Silk Experience"
              width={500}
              height={200}
              className="w-full h-[200px] rounded-lg"
            />
            <p className="text-btnText mt-4">
              Explore vibrant handloom streets and shop for exquisite
              Kanchipuram silk sarees, known for their rich colors and intricate
              designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
