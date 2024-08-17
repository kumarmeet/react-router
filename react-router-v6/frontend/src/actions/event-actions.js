import { json, redirect } from "react-router-dom";

export const eventAddActions = async ({ request }) => {

  const formData = await request.formData();

  const eventData = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  }

  console.log(eventData)

  const response = await fetch(`http://localhost:8080/events`, { method: request.method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(eventData) });

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch an event!" }
    // throw new Response(JSON.stringify({ message: "Could not fetch an event!" }), { status: response.status })
    throw json({ message: "Could not save an event!" }, { status: response.status })
  }

  return redirect("/events")
}

export const eventDeleteActions = async ({ params, request }) => {

  const { id } = params;


  const response = await fetch(`http://localhost:8080/events/${id}`, { method: request.method });

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch an event!" }
    // throw new Response(JSON.stringify({ message: "Could not fetch an event!" }), { status: response.status })
    throw json({ message: "Could not delete an event!" }, { status: response.status })
  }

  return redirect("/events")
}