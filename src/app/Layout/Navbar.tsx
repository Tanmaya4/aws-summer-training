import ProjectLogo from "@/app/components/ProjectLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div
      className="w-full px-8 h-24 flex items-center justify-between gap-4 bg-gradient-to-b
       from-slate-400 to-slate-100"
    >
      <ProjectLogo onlyProjectLogo />
      <Link
        href="https://github.com/xanderbilla/aws-summer-training"
        target="_blank"
      >
        <Image src="/icons/github.svg" alt="Menu" width={36} height={36} />
      </Link>
    </div>
  );
}
