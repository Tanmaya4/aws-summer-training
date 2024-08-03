import Image from "next/image";
import React from "react";

type Props = {
  isLoading: boolean;
};

export default function Loading({ isLoading }: Props) {
  return (
    <div>
      {isLoading ? (
        <Image
          height={36}
          width={36}
          src="/icons/loading.gif"
          alt="Loading..."
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
