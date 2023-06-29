import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
