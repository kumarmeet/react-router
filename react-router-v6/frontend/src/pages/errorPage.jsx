import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10rem",
        textAlign: "center",
      }}
    >
      <h1>Something went wrong</h1>
      <p>
        We&apos;re sorry, but something unexpected happened. Please try again
        later.
      </p>
      <p>{error.data.message}</p>
      <p>{error.status}</p>
      <p>
        <Link to="/events">Go back to the events page</Link>
      </p>
    </div>
  );
};
