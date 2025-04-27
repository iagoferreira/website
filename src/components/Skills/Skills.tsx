import { memo } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  const learning = ['next.js', 'deploy (cloudflare)'];
  const improving = ['typescript', 'node.js', 'mongodb', 'client-side tools'];
  const experienced = ['react', 'testing', 'state management'];

  return (
    <div className="skills-grid">
      <SkillCard header="learning" skills={learning} />
      <SkillCard header="improving" skills={improving} />
      <SkillCard header="experienced" skills={experienced} />
    </div>
  )
}

export default memo(Skills);
