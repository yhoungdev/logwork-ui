interface IpopularServicePanel {
  data: { title: string; imgSrc: string };
}

const PopularServicePanel: React.FC<IpopularServicePanel> = ({
  data: { title, imgSrc },
}) => {
  return (
    <div className="h-[200px] w-[201px] col-span-1 relative rounded-2xl overflow-clip group [&:hover_.overlay]:scale-[1.1]">
      <div className="overlay absolute w-full h-full bg-gray-300 transition-all ">
        <div
          className="w-full h-full"
          style={{
            background: `url(/assets/popularServices/${imgSrc})`,
          }}
        ></div>
      </div>
      <div
        className=" relative z-10  w-full h-full flex items-end color-white px-[8px] py-[12px] transition "
        style={{
          background: "linear-gradient(180deg,transparent 50%,black 120%)",
        }}
      >
        <p className="text-white font-bold">{title}</p>
      </div>
    </div>
  );
};

export default PopularServicePanel;
