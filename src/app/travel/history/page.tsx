import { getRoutes } from "@/lib/actions/route";
import HistoryCard from "@/app/travel/history/history-card";

export default async function Page() {
  const routes = await getRoutes();

  return (
    <>
      <div className="flex h-full min-h-[calc(100vh-56px-73px)] flex-col items-center justify-center gap-10 bg-secondary px-5 sm:px-10 md:flex-row md:gap-20">
        <div className="flex flex-col gap-4">
          {routes.map((route) => (
            <HistoryCard route={route} key={route.id} />
          ))}
        </div>
      </div>
    </>
  );
}
