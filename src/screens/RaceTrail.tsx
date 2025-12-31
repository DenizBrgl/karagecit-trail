import TrailCard from "./TrailCard";

const RaceTrail = () => {
  return (
    <div className="w-full py-10 px-4 flex flex-wrap justify-center gap-6 bg-white">
      <TrailCard
        title="8K DISCOVERY RUN TRAIL"
        distance="8K"
        elevation="350m+"
        backgroundImg="/bora2.jpg"
        itraImg="/itra0.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png"
        detailPath="/TrailDetail8K"
      />

      <TrailCard
        title="15K WILD CANYON TRAIL"
        distance="15K"
        elevation="736m+"
        backgroundImg="/resim.jpg"
        itraImg="/itra0.png"
        utmbImg="/utmb.png"
        extraImg="/itra.png"
        detailPath="/TrailDetail15K"
      />

      <TrailCard
        title="38K MOUNTAIN LEGEND TRAIL"
        distance="38K"
        elevation="1450m+"
        backgroundImg="/bora5.jpg"
        itraImg="/itra2.png"
        utmbImg="/utmb50.png"
        extraImg="/itra.png"
        detailPath="/TrailDetail38K"
      />

      <TrailCard
        title="50K ULTRA CHALLENGE TRAIL"
        distance="50K"
        elevation="1585m+"
        backgroundImg="/resim5.JPG"
        itraImg="/itra4.png"
        utmbImg="/utmb50.png"
        extraImg="/itra.png"
        detailPath="/TrailDetail50K"
      />
    </div>
  );
};

export default RaceTrail;
