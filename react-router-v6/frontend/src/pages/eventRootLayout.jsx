import { Outlet } from "react-router-dom";
import EventsNavigations from "../components/EventsNavigation";

export const EventRootLayout = () => {
  return (
    <>
      <EventsNavigations />
      <main>
        <Outlet />
      </main>
    </>
  );
};
