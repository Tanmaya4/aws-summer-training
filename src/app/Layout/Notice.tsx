"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {};

export default function Notice({}: Props) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-20 w-full flex items-center transition-all ease-in-out duration-700 
        shadow-4xl justify-center mb-4 bg-red-900 text-white text-base md:text-lg lg:text-xl font-medium text-center 
        py-2 ${isFixed ? "fixed top-0 left-0 w-full z-20" : ""}`}
    >
      <p>
        This website is under development phase. <br />
        <span className="text-sm md:text-base lg:text-lg">
          For Feedback and contribution.
        </span>{" "}
        <Link
          href="https://contact.xanderbilla.com/"
          target="_blank"
          className="underline"
        >
          Click Here
        </Link>
      </p>
    </div>
  );
}
