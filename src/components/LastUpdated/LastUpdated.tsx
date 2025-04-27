import { type JSX, memo } from "react";
import "./LastUpdated.css";

const LastUpdated = (): JSX.Element => {
  return (
    <div className="last-updated">
      last updated: april 2025
    </div>
  )
};

export default memo(LastUpdated);
