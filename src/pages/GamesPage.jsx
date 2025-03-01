import About from "../components/About";
import Games from "../components/Games";
import Support from "../components/Support";
import React, { useEffect } from "react";
import ExtraFunctions from "../components/ExtraFunctions";

function GamesPage() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="bg-slate-100 w-full min-h-screen">
      <ExtraFunctions />

      <Games />
      {/*   <Support /> */}
    </div>
  );
}

export default GamesPage;
