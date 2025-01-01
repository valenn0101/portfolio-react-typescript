import { Outlet } from "react-router-dom";
import '../config/i18next.config';

export default function Home() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
