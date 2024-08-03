"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import DeleteIcon from "../components/DeleteIcon";

export default function ImageGrid() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get("https://8260su3kei.execute-api.ap-south-1.amazonaws.com/dev/images")
      .then((response) => {
        console.log(response.data);
        setGallery(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (index: number) => {
    const updatedGallery = [...gallery];
    updatedGallery.splice(index, 1);
    setGallery(updatedGallery);
  };

  return (
    <>
      {gallery.length > 0 ? (
        <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all">
          {gallery.map((image, index) => (
            <div key={index} className="relative">
              <Card data={image} />
              <button
                className="absolute top-2 right-2 bg-slate-600/40 text-white p-2 rounded-full"
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-xl font-medium text-neutral-500/50">
            No images found.
          </p>
        </div>
      )}
    </>
  );
}
