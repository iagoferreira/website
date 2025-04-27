import { type JSX, memo } from "react";
import "./Description.css";

const Description = (): JSX.Element => {
  return (
    <div className="description">
      <p>software developer with a front-end background.</p>
      <p>diving deeper into back-end, database, deploy, infrastructure and security.</p>
    </div>
  );
}

export default memo(Description);
