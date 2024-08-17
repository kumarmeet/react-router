import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export const EventDetailsPage = () => {
  const { event } = useRouteLoaderData("event-details");

  return (
    <>
      <EventItem event={event} />
    </>
  );
};
