"use client";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Demo = ({ backgroundImage, data }) => {
  const sectionRef = useRef(null);

  const downloadPDF = () => {
    const input = sectionRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="text-black w-[18.5rem] sm:w-[37rem] md:w-[44.5rem] lg:w-[55rem] h-[14.5rem] sm:h-[29rem] md:h-[34rem] lg:h-[42rem] bg-no-repeat bg-contain flex items-center justify-center text-[6px] sm:text-[12px] md:text-[14px] lg:text-[18px] font-medium p-10 bg-red-200"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col mt-2 sm:mt-6 lg:mt-8 gap-2 w-full">
            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                Hobbies / Interests
              </span>
              <span className="mr-3">:</span>
              <span>{data?.hobbies}</span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                I work best when
              </span>
              <span className="mr-3">:</span>
              <span>{data?.workbest}</span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                I work my best with
              </span>
              <span className="mr-3">:</span>
              <span>{data?.bestwith}</span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                I am most encouraged by
              </span>
              <span className="mr-3">:</span>

              <span>{data?.encouraged}</span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                More about me
              </span>
              <span className="mr-3">:</span>
              <span>{data?.about}</span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                Last time learned something new
              </span>
              <span className="mr-3">:</span>
              <span>{data?.lasttime}</span>
            </div>

            <div className="flex items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                Preferred method of learning
              </span>
              <span className="mr-3">:</span>
              <span>{data?.methodof}</span>
            </div>

            <div className="flex  items-start">
              <span className="font-semibold w-24 sm:w-36 lg:w-48">
                Belief about yourself
              </span>
              <span className="mr-3">:</span>
              <span>{data?.believe}</span>
            </div>
          </div>
        </div>
      </section>

      <button onClick={downloadPDF}>Download PDF</button>
    </>
  );
};

export default Demo;
