function CommonButton({ color, text, callBack }) {
  const buttonStyle =
    "w-[150px] h-[80px]  rounded-lg text-white hover:bg-slate-400 transition-all";

  console.log(buttonStyle);
  return (
    <div className="w-full  bg-slate-100 flex flex-col justify-center items-center">
      <button
        style={{ backgroundColor: color }}
        className={buttonStyle}
        onClick={() => {
          callBack();
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default CommonButton;
