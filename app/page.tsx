import {
  Banner,
  NavBar,
  WhyFirstry,
  TimeLine,
  Temples,
  SilkExperience,
  BookingForm,
  Footer,
} from "./_components";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <Banner />
      <WhyFirstry />
      <TimeLine />
      <Temples />
      <SilkExperience />
      <BookingForm />
      <Footer/>
    </div>
  );
}
