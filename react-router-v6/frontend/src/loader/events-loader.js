import { json } from "react-router-dom";

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return { isError: true, message: "Could not fetch events!" }
  }

  return await response.json();
}

export const eventsDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch an event!" }
    // throw new Response(JSON.stringify({ message: "Could not fetch an event!" }), { status: response.status })
    throw json({ message: "Could not fetch an event!" }, { status: response.status })
  }
  // const resData = await response.json(); 
  return response
}