import { type JSX, memo } from "react";
import "./SkillCard.css";

interface Props {
  header: string;
  skills: string[];
};

const SkillCard = ({
  header,
  skills
}: Props): JSX.Element => (
  <div className="skill-card">
    <div className="skill-header">{header}</div>
    <ul>
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">{skill}</li>
      ))}
    </ul>
  </div>
);

export default memo(SkillCard);
