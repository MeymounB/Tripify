import dynamic from "next/dynamic";

export const LazyMap = dynamic(() => import("./map"), { ssr: false });
