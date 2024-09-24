"use client";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { useState } from "react";

import "./scss/Gallery.scss";
import { DemoGallerys } from "./DemoGallery";

export default function Gallery() {
  // 初期ステータス　page1
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPage = Math.ceil(DemoGallerys.length / itemsPerPage);

  // 表示するJsonの絞り込み
  const currenItems = DemoGallerys.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <p>Gallery_page</p>
      <ImageList cols={3}>
        {currenItems.map((value) => (
          <ImageListItem key={value.id}>
            <Image
              src={`${value.URL}?w=200&fit=crop&auto=format`}
              alt={value.label}
              width={500}
              height={500}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className="page_nation">
        {!(currentPage === 1) && (
          <button
            className="PrevPage"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        )}

        {!(currentPage === totalPage) && (
          <button
            className="NextPage"
            onClick={handleNext}
            disabled={currentPage === totalPage}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
