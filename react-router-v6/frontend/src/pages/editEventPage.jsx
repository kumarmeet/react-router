import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export const EditEventPage = () => {
  const { event } = useRouteLoaderData("event-details");

  return (
    <>
      <EventForm
        event={event}
        method={"PUT"}
      />
    </>
  );
};
