import React from "react";

const Banner = () => {
  return (
    <div className={`container mx-auto `}>
      {/* Main Content */}
      <main className="p-4">
        <div className="">
          {/* Banner */}
          <section className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Psychology", "Swimming", "Weather", "Recovery", "Training"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg"
                >
                  <img
                    src={`https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg`}
                    alt={item}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="text-gray-800 dark:text-white font-semibold">
                    {item} in Sports
                  </h3>
                </div>
              )
            )}
          </section>
        </div>
      </main>

      <div className="w-full bg-red-600 overflow-x-auto whitespace-nowrap">
        <ul className="flex space-x-4 px-4 py-2">
          {[
            "#Awards & Honors",
            "#Breaking News",
            "#Championships",
            "#Coaching Changes",
            "#Draft Picks",
            "#Game Previews",
            "#Hall of Fame",
            "#Injury Updates",
            "#Match Analysis",
            "#Offseason",
          ].map((tag, index) => (
            <li
              key={index}
              className="text-white font-semibold hover:text-gray-300 cursor-pointer"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
