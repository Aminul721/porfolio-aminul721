import React from "react";

const SliderCard = ({ info }) => {
  return (
    <div className="w-full lg:w-2/5 flex flex-col justify-center py-8 lg:py-0 pt-16 lg:pt-0">
      {info.map(({ id, name, roll, desc, num, email }) => (
        <div className="flex flex-wrap flex-col w-full gap-1.5 lg:gap-3.5" key={id}>
          <h2 className="text-3xl font-semibold text-center mb-2">{name}</h2>
          <h3 className="text-2xl font-semibold text-center">{roll}</h3>
          <p className="text-center">{desc}</p>
          <p className="text-center">{num}</p>
          <p className="text-center">{email}</p>
        </div>
      ))}
    </div>
  );
};

export default SliderCard;
