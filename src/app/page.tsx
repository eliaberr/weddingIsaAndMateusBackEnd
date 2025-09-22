import { Countdown } from "./components/countdown/countdown";
import { Greeting } from "./components/greeting/greeting";
import NavBar from "./components/navBar/navBar";
import Welcome from "./pages/welcome";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <Countdown/>
      <Greeting/>
    </div>
  );
}
