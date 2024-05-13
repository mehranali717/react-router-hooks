import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
const loadEvents = async () => {
  const response = (await fetch("http://localhost:8080/events"));

  if (!response.ok) {
    // setError("Fetching events failed.");
    // throw {message:"Could not fetch events!"}
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
