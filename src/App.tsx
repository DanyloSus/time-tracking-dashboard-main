import Section from "./Elements/Section";

import data from "./data.json";

import useTimeStore from "./store";

const App = () => {
  const { type, changeType } = useTimeStore((s) => s);

  return (
    <main className="grid grid-cols-4 grid-rows-2 gap-[30px] lg:flex flex-col lg:gap-6 m-5">
      <section className="row-span-2 grid grid-cols-1 grid-rows-3 h-[518px] w-[255px] bg-dark-blue rounded-2xl lg:h-[204px] lg:w-[326px]">
        <div className="row-span-2 bg-blue rounded-2xl px-[29px] pt-[34px] lg:flex justify-between items-center lg:py-0">
          <img
            src="./image-jeremy.png"
            alt="image jeremy"
            className="w-[78px] h-[78px] border-[3px] border-white rounded-full mb-[44px] lg:mb-0"
          />
          <div>
            <p className="text-pale-blue mb-2 lg:mb-0">Report for</p>
            <h1 className="font-light text-4xl lg:text-2xl">Jeremy Robson</h1>
          </div>
        </div>
        <div className="flex flex-col justify-between py-9 px-[34px] lg:flex-row lg:items-center lg:py-0">
          <p
            onClick={() => changeType("daily")}
            className={`transition-colors ${
              type === `daily` ? `text-white` : `text-pale-blue`
            } hover:text-white cursor-pointer`}
          >
            Daily
          </p>
          <p
            onClick={() => changeType("weekly")}
            className={`transition-colors ${
              type === `weekly` ? `text-white` : `text-pale-blue`
            } hover:text-white cursor-pointer`}
          >
            Weekly
          </p>
          <p
            onClick={() => changeType("monthly")}
            className={`transition-colors ${
              type === `monthly` ? `text-white` : `text-pale-blue`
            } hover:text-white cursor-pointer`}
          >
            Monthly
          </p>
        </div>
      </section>
      {data.map((element) => {
        return (
          <Section
            key={element.title}
            img={element.img}
            title={element.title}
            time={element.timeframes[type].current}
            prevTime={element.timeframes[type].previous}
            color={element.color}
          />
        );
      })}
    </main>
  );
};

export default App;
