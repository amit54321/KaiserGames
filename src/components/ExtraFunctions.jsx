import { useEffect } from "react";

function ExtraFunctions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div></div>;
}

export default ExtraFunctions;
