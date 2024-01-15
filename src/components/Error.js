import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Opps !!!</h1>
      <h2>something went wrong</h2>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
