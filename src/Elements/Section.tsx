interface Props {
  img: string;
  title: string;
  time: number;
  prevTime: number;
  color: string;
}

const Section = ({ img, title, time, prevTime, color }: Props) => {
  return (
    <section
      style={{ background: color }}
      className="relative overflow-hidden rounded-2xl p-0"
    >
      <img src={`./${img}`} alt={img} className="absolute right-4 -top-2" />
      <div className="absolute bottom-0 left-0 bg-dark-blue w-[100%] h-[199px] pl-[31px] pb-9 pt-[33px] pr-[34px] flex justify-between items-start flex-col rounded-2xl hover:bg-[hsl(235,46%,30%)] cursor-pointer transition-colors">
        <header className="flex justify-between items-center w-full">
          <h3>{title}</h3>
          <img
            src="./icon-ellipsis.svg"
            alt="icon ellipsis"
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </header>
        <h2 className="text-5xl font-light">{time}hrs</h2>
        <p className="text-desaturated-blue">Last Week - {prevTime}hrs</p>
      </div>
    </section>
  );
};

export default Section;
