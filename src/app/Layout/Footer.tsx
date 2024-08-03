import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <div className="w-full px-8 h-36 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
      <ProjectLogo />
      <div className="h-full flex flex-col items-center justify-center gap-2">
        <h3 className="text-xl md:text-2xl">Image Gallery</h3>
        <p className="text-sm md:text-base text-center opacity-60">
          &copy; {year}{" "}|{" "} <Link href="https://github.com/xanderbilla" target="_blank"
          className="underline font-bold text-neutral-600/80"
          >
            Tanmaya Darisi
          </Link>
          <br/> In corporation with <Link href="https://github.com/Tanmaya4" target="_blank"
          className="underline font-bold text-neutral-600/80"
          >     
            Vikas Singh
          </Link>
        </p>
      </div>
    </div>
  );
}
