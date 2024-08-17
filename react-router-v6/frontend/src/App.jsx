import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { EventsPage } from "./pages/eventsPage";
import { EventDetailsPage } from "./pages/eventDetailsPage";
import { NewEventPage } from "./pages/newEventPage";
import { EditEventPage } from "./pages/editEventPage";
import { RootLayout } from "./pages/rootLayout";
import { EventRootLayout } from "./pages/eventRootLayout";
import { eventsDetailsLoader, eventsLoader } from "./loader/events-loader";
import { ErrorPage } from "./pages/errorPage";
import { eventAddActions, eventDeleteActions } from "./actions/event-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-details",
            loader: eventsDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: eventDeleteActions,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: eventAddActions },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
