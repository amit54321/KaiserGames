import { useLocation } from "react-router-dom";
import CardGame from "../components/CardGame";
import ListGameImages from "../components/ListGameImages";

import ExtraFunctions from "../components/ExtraFunctions";

function SingleGamePage() {
  const location = useLocation();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ExtraFunctions />

      <CardGame
        name={location.state.name}
        image={location.state.image}
        id={location.state.id}
        url={location.state.url}
        showAbout={false}
      />
      <div
        className="w-[80%] text-l font-semibold text-left text-black pt-[40px] justify-center pb-[40px]"
        style={{ whiteSpace: "break-spaces" }}
      >
        {location.state.desc}
      </div>
      <ListGameImages id={location.state.id} />
    </div>
  );
}
export default SingleGamePage;
