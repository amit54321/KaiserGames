import CardGame from "../components/CardGame";
import CommonButton from "../components/CommonButton";

import { gamesArray } from "../games";
import { useNavigate } from "react-router-dom";

function Game() {
  let navigate = useNavigate();
  function openGamesPage() {
    console.log("OPENNG ");
    navigate("/games");
  }
  const randomGame = gamesArray
    .sort(() => Math.random() - Math.random())
    .find(() => true);

  return (
    <div className="w-full pb-[20px]  bg-slate-100 flex flex-col  items-center">
      {/*  <div className="w-[50%] text-[20px] font-bold text-black-100 text-center pt-[40px] md:text-[30px]">
        At King, we bring moments of magic to hundreds of millions of people,
        every single day.
      </div> */}
      <div className="w-[100%] text-sm flex  flex-col gap-3 items-center md:flex-row md:w-[80%]">
        <div className="w-full  text-sm font-semibold flex place-content-center text-black-100 pt-[40px] md:w-[60%] md:p-[40px] ">
          <CardGame
            name={randomGame.game_name}
            image={randomGame.game_image}
            id={randomGame.id}
            url={randomGame.game_url}
            desc={randomGame.desc}
            showAbout={true}
          />
        </div>
        <div className="w-[80%]  text-sm flex    flex-col gap-10 items-center md:w-[85%]">
          <div className="w-full font-bold text-[40px] flex  text-left  pt-[20px] md:pt-[0px]">
            Games
          </div>
          <div className="w-full font-semibold  text-[17px]  text-left">
            Our dream is to create games that as many people as possible play
            for years and that are remembered forever.
          </div>
          {
            <button
              className="w-[100px] h-[50px]  text-[12px] self-start font-semibold rounded-lg bg-slate-500 text-white  hover:bg-slate-400 transition-all"
              onClick={() => {
                openGamesPage();
              }}
            >
              MORE GAMES
            </button>
          }

          {/*  <CommonButton
            color={"black"}
            text={"MORE GAMES"}
            callBack={openGamesPage}
          /> */}
        </div>
      </div>
    </div>
  );
}
export default Game;
