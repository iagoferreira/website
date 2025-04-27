import { type JSX, memo } from "react";
import "./SocialLink.css";

interface Props {
  link: string;
  text: string;
  svg: JSX.Element;
};

const SocialLink = ({
  link,
  text,
  svg
}: Props): JSX.Element => {
  return (
    <a href={link} className="social-link" target="_blank">
      {svg}
      {text}
    </a>
  )
};

export default memo(SocialLink);
