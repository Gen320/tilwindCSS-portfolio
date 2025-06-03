import { JSX } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};
