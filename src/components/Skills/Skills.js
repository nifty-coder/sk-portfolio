import React from 'react';
import SkillsIcon from '../../assets/images/icons/skills.png';
import Card from 'react-bootstrap/Card';
import TechStacks from './TechStacks';
import ToolsDbs from './ToolsDbs';
import './Skills.css';

const Skills = () => {
   return (
    <div>
      <Card>
      <h2><img src={SkillsIcon} alt="My Skills" className="Icon" /> Skills</h2>
      <TechStacks />   
      <ToolsDbs />
      <h4 className="SoftSkillsHeading"><u>Soft Skills</u></h4>
      <div className="SoftSkills">
        <ul>
          <li>Active Listening</li>
          <li>Communication</li>
          <li>Creativity</li>
        </ul>
       </div>
      </Card>
    </div>
    );
};

export default Skills;