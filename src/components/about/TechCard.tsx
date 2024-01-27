import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TechCardProps = {
  name: string;
  image: StaticImageData;
};

const TechCard = ({ name, image }: TechCardProps) => {
  return (
    <div className="green-pink-gradient rounded-2xl p-1 w-[180px] xl:w-[200px] 2xl:w-[250px] h-full slide-in">
      <div className="bg rounded-xl p-2 flex flex-col items-center h-full text-white gap-5 py-10">
        <Image
          src={image}
          alt="xl"
          width={80}
          height={80}
          className="2xl:w-[130px] 2xl:h-[130px]"
        />
        <div className="text-center lg:text-lg 2xl:text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default TechCard;
