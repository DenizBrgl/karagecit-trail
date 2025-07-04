import React from "react";

const courses = [
  {
    km: "8K",
    elevation: "312m+",
    title: "DISCOVERY RUN",
    tag: "Run",
    itra: 0,
    image: "/resim.jpg",
  },
  {
    km: "17K",
    elevation: "842m+",
    title: "WILD CANYON",
    tag: "Dragon",
    itra: 1,
    image: "/17k.jpg",
  },
  {
    km: "33K",
    elevation: "1685m+",
    title: "MOUNTAIN LEGEND",
    tag: "Ultra",
    itra: 2,
    image: "/33k.jpg",
  },
];

const RaceCards = () => {
  return (
    <div className="w-full py-12 px-4 bg-[#f5f3ea]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Üstte yazılar */}
            <div className="absolute top-4 left-4 text-white drop-shadow-lg">
              <div className="text-3xl font-extrabold">{course.km}</div>
              <div className="text-sm">{course.elevation}</div>
            </div>
            <div className="absolute bottom-16 left-4 text-white drop-shadow-lg">
              <div className="text-2xl font-bold">{course.title}</div>
              <div className="text-lg">{course.tag}</div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-3 py-1 rounded-full text-white text-sm font-bold">
              ITRA {course.itra}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceCards;
