import dynamic from "next/dynamic";

export const LazySearch = dynamic(() => import("./search"), {
  ssr: false,
});
