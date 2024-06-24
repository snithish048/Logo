const Logo = () => {
  return (
    <>
      <div className="relative w-64 h-64 mx-auto my-[10rem]">
        <div className="rotate-45 w-60 h-60 border-[20px] border-t-[#ff944d] border-b-[#6699ff] border-r-white border-l-[#80ffaa]">
          <div className="flex justify-center flex-col h-[7rem] w-[12rem]  absolute -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
            <p className="text-[1rem] font-bold text-white">
              HTML
              <span className="text-orange-500"> & </span>
              CSS
            </p>
            <div className="mt-2 text-sm text-white">
              design and build websites
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
