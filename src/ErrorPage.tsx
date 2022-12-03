import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginTop: "5rem"}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}