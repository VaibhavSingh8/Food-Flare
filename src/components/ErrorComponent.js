import { useRouteError } from "react-router-dom"; // useRouteError is a hook for handling errors in react-router-dom itself and provides a better error message.

const ErrorComponent = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Ooops!</h1>
      <h2>Something went wrong.</h2>
      <h3>{err.status} : {err.statusText}</h3>
    </div>
  );
};

export default ErrorComponent;