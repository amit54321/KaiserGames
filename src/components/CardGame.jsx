import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CardGame({ name, image, id, url, showAbout, desc }) {
  let navigate = useNavigate();
  function openInNewTab(url) {
    console.log(url);
    var win = window.open(url, "_blank");
    win.focus();
  }

  function OpenNewTabAbout(name, image, url, id, desc) {
    navigate("/games/about", {
      state: { url: url, name: name, image: image, id: id, desc: desc },
    });
  }

  return (
    <div className="w-[300px]  bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold text-center">{name}</div>

      <button
        className="w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all"
        onClick={() => openInNewTab(url)}
      >
        Download
      </button>

      {showAbout === true ? (
        <button
          className="w-full p-3 rounded-lg bg-slate-500 text-white hover:bg-slate-400 transition-all"
          onClick={() => OpenNewTabAbout(name, image, url, id, desc)}
        >
          About
        </button>
      ) : null}
    </div>
  );
}

export default CardGame;
