import ConfirmAttendance from "./components/confirmAttendance/confirmAttendance";
import { Countdown } from "./components/countdown/countdown";
import { Greeting } from "./components/greeting/greeting";
import InformationWedding from "./components/informationWedding/informationWedding";
import NavBar from "./components/navBar/navBar";
import Welcome from "./pages/welcome";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <Countdown />
      <Greeting />
      <InformationWedding />
      <ConfirmAttendance />
    </div>
  );
}
