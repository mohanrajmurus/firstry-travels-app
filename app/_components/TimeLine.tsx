import React from "react";

const itinerary = [
  {
    time: "7:00 AM",
    title: "PICKUP",
    description: "Only from Kanchipuram bus stand or Railway station",
  },
  {
    time: "7:15 AM",
    title: "KAMAKSHI AMMAN TEMPLE",
    description: "Begin your spiritual journey at the sacred Shakti Peetha.",
  },
  {
    time: "9:00 AM",
    title: "EKAMBARESWARAR TEMPLE",
    description:
      "Visit one of the Pancha Bhoota Sthalams with its ancient mango tree.",
  },
  {
    time: "11:00 AM",
    title: "KAILASANATHAR TEMPLE",
    description: "Explore the 8th-century Pallava architectural marvel.",
  },
  {
    time: "12:00 PM",
    title: "SOUTH INDIAN LUNCH",
    description: "Enjoy a traditional vegetarian meal at a local restaurant.",
  },
  {
    time: "12:45 PM",
    title: "SILK SAREE WEAVING & SHOPPING",
    description:
      "Discover Kanchipuram’s silk heritage with exclusive access to genuine sellers.",
  },
  {
    time: "4:00 PM",
    title: "VARADARAJA PERUMAL TEMPLE",
    description:
      "Marvel at the Vaishnavite temple with its golden lizard shrine.",
  },
  {
    time: "5:30 PM",
    title: "CHITHRAGUPTAR TEMPLE",
    description:
      "Visit the rare temple dedicated to the record-keeper of karma.",
  },
  {
    time: "7:00 PM",
    title: "DROP",
    description: "Return to Kanchipuram bus stand or Railway station.",
  },
];
const TimelineItem = ({
  time,
  title,
  description,
  isLast,
}: {
  time: string;
  title: string;
  description: string;
  isLast?: boolean;
}) => {
  return (
    <div className="flex mb-8">
      <div className="flex flex-col items-center mr-4">
        <div className="w-32 text-right">
          <span className="text-lg font-semibold text-brand">{time}</span>
        </div>
        <div
          className={`w-px h-full bg-gray-300 mt-2 ${
            isLast ? "hidden" : "block"
          }`}
        ></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-semibold text-heading">{title}</h3>
        <p className="text-paragraph mt-2">{description}</p>
      </div>
    </div>
  );
};
export const TimeLine = () => {
  return (
    <section className=" py-5 lg:py-10 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-heading text-2xl lg:text-4xl font-semibold">
          Itinerary Timeline
        </p>
        <div className="w-full max-w-2xl mx-auto mt-10 flex flex-col gap-y-4">
          {itinerary.map((item, index) => {
            const isLast = index === itinerary.length - 1;
            return (
              <TimelineItem
                key={index}
                time={item.time}
                title={item.title}
                description={item.description}
                isLast={isLast}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
