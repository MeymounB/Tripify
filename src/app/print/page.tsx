"use client";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintablePage from "@/components/print/print";
import { Button } from "@/components/ui/button";
const PageWithPrint: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <PrintablePage ref={componentRef} />
      <div className="flex justify-center">
        <Button className="!bg-black">
          <button onClick={handlePrint}>Print this page</button>
        </Button>
      </div>
    </div>
  );
};

export default PageWithPrint;
