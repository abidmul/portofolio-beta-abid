function Picture() {
  return (
    <div className="w-full flex flex-col items-center justify-between relative sm:flex-row">
      <img src="./img/computer.jpg " className="w-auto h-auto" />
      <div className="relative top-10 right-10 flex flex-col items-center justify-center sm:absolute">
        <h1 className="text-5xl font-bold text-teal-500 text-center p-5">
          IF YOU HAVE PROBLEMS <br /> WE CAN HELP YOU
        </h1>
        <p className=" text-center font-bold">
          Kami adalah pilihan terbaik anda
        </p>
        <button className="tombol w-90 bg-orange-400 items-center text-black text-sm p-5 rounded-full hover:bg-orange-700">
          Get an Estimate
        </button>
      </div>
    </div>
  );
}

export default Picture;
