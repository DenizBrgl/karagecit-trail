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
        title="15K WILD CANYON"
        distance="15K"
        elevation="736m+"
        backgroundImg="/resim10.jpg"
        itraImg="/itra0.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png" // 👈 buraya ekledik
      />
      <TrailCard
        title="50K MOUNTAIN LEGEND"
        distance="50K"
        elevation="1450m+"
        backgroundImg="/resim5.JPG"
        itraImg="/itra2.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png" // 👈 buraya ekledik
      />
    </div>
  );
};

export default RaceTrail;
