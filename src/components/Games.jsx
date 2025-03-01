/* eslint-disable react/jsx-key */
import CardGame from "../components/CardGame";
import { gamesArray } from "../games";

function Games() {
  return (
    <div className="w-full bg-slate-100 flex flex-col justify-center items-center">
      <div className="w-[80%] text-[30px] font-bold text-black-100 text-center pt-[40px]">
        GAMES
      </div>
      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-[40px] pb-[40px]">
        {gamesArray.length >= 1 ? (
          gamesArray.map((item) => (
            <CardGame
              name={item.game_name}
              image={item.game_image}
              id={item.id}
              url={item.game_url}
              desc={item.desc}
              showAbout={true}
            />
          ))
        ) : (
          <div className="text-center text-2xl text-green-500 font-semibold pt-5">
            No Game Found
          </div>
        )}
      </div>
    </div>
  );
}
export default Games;
