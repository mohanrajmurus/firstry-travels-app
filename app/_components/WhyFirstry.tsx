import React from "react";

export const WhyFirstry = () => {
  return (
    <section className="container mx-auto py-5 lg:py-10" id="about-us">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-heading text-2xl lg:text-4xl font-semibold">
          Why Choose Firstry Travels?
        </p>
        <p className="text-paragraph text-base lg:text-lg mt-4">
          A perfect blend of spiritual heritage and living tradition awaits you.
          Explore the sacred charm of ancient temples like Kailasanathar and
          Varadaraja Perumal, each echoing centuries of devotion and
          architectural brilliance. Wander through the vibrant handloom streets
          of Kanchipuram, where tradition weaves its story into every thread of
          the world-renowned Kanchipuram silk sarees. With Firsty Travels, you
          don’t just visit a destination—you experience its soul. From
          personalized temple tours to authentic cultural encounters, we ensure
          your journey is meaningful, memorable, and deeply enriching.
        </p>
        <div className="flex flex-col lg:flex-row space-y-5 items-center justify-between mt-10 w-full ">
          <div className="flex flex-col items-center justify-center gap-y-3 border-b lg:border-b-0">
            <p className="text-3xl">🛕</p>
            <p className="text-paragraph text-lg font-semibold">
              5 Historic Temples
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 border-b lg:border-b-0">
            <p className="text-3xl">🧵</p>
            <p className="text-paragraph text-lg font-semibold">
              Authentic Silk Shopping
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 border-b lg:border-b-0">
            <p className="text-3xl">🍛</p>
            <p className="text-paragraph text-lg font-semibold">
              Traditional South Indian Lunch
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 border-b lg:border-b-0">
            <p className="text-3xl">🚌</p>
            <p className="text-paragraph text-lg font-semibold">
              Pickup & Drop
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 border-b lg:border-b-0">
            <p className="text-3xl">🧑‍🏫</p>
            <p className="text-paragraph text-lg font-semibold">
              Expert Local Guide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
