"use client";

import ConfirmAttendance from "./components/confirmAttendance/confirmAttendance";
import { Countdown } from "./components/countdown/countdown";
import Footer from "./components/footer/footer";
import { Greeting } from "./components/greeting/greeting";
import InformationWedding from "./components/informationWedding/informationWedding";
import NavBar from "./components/navBar/navBar";
import Welcome from "./components/welcome/welcome";

export default function Home() {
  return (
    <>
      <NavBar />
      <Welcome />
      <Countdown />
      <Greeting />
      <InformationWedding />
      <ConfirmAttendance />
      <Footer />
    </>
  );
}
