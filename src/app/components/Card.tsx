import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

export default function Card({ data }: Props) {
  return (
    <div
      className="h-48 w-80 md:h-52 md:w-80 lg:h-56 lg:w-96 relative cursor-pointer hover:scale-105 transition-all 
    ease-in-out duration-300"
    >
      <Image
        src={data.presignedUrl}
        alt={data.fileName}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="rounded-md hover:shadow-2xl shadow-lg transition-all ease-in-out duration-300"
      />
    </div>
  );
}
