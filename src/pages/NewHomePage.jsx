import About from "../components/About";
import Game from "../components/Game";
import Support from "../components/Support";
import ExtraFunctions from "../components/ExtraFunctions";

//import { useEffect } from "react";

function NewHomePage() {
  // useEffect(() => {
  //  window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="bg-slate-100 w-full min-h-screen">
      <ExtraFunctions />
      <About />
      <Game />

      {/* <Support /> */}
    </div>
  );
}

export default NewHomePage;
