import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  const { status, statusText, data } = err;
  return (
    <div>
      <h1>OOPS</h1>
      <h2>Something went wrong</h2>
      <h3>{err.message}</h3>
      <h4>{err.status + ":" + err.statusText + ":" + err.data}</h4>
      <h5>{status + ":" + statusText + ":" + data}</h5>
    </div>
  );
};

export default Error;
