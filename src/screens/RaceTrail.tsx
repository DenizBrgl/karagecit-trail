import TrailCard from "./TrailCard";

const RaceTrail = () => {
  return (
    <div className="w-full py-10 px-4 flex flex-wrap justify-center gap-6 bg-white">
      <TrailCard
        title="8K DISCOVERY"
        distance="8K"
        elevation="350m+"
        backgroundImg="/resim13.jpg"
        itraImg="/itra0.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png" // 👈 buraya ekledik
      />
      <TrailCard
        title="17K WILD CANYON"
        distance="17K"
        elevation="736m+"
        backgroundImg="/resim10.jpg"
        itraImg="/itra0.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png" // 👈 buraya ekledik
      />
      <TrailCard
        title="33K MOUNTAIN LEGEND"
        distance="33K"
        elevation="1450m+"
        backgroundImg="/resim12.JPG"
        itraImg="/itra2.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png" // 👈 buraya ekledik
      />
    </div>
  );
};

export default RaceTrail;
