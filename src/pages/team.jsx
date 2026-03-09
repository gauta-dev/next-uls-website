import { motion } from "framer-motion";
import AnimatePage from "../components/AnimatePage";
import TeamCarousel from "../components/TeamCarousel";
import TeamSquare from "../components/TeamSquare";
import DirectorsNote from "../components/DirectorsNote";
import Header from "../components/Header";
import AOS from "aos";
import { useEffect } from "react";
import BackToTop from "@/components/BackToTop";
import SiteHead from "@/components/SiteHead";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // const firstRow = [
  //   // { name: "Jhon Sydney Gumede", title: "Operations Manager" },
  //   { name: "Richard Mohau Mokoena", title: "Managing Director" },
  //   { name: "Tumi Nkosi", title: "Tactical Operations" },
  //   { name: "Tumelo Mokoena", title: "Sales & Marketing" },
  // ];

  return (
    <AnimatePage>
      <SiteHead />
      <Header />
      <DirectorsNote />
      <BackToTop />
    </AnimatePage>
  );
};

export default Team;
