import styles from './skillsStyle.module.css';
import SkillList from '../../common/SkillList';
import checkMarkIcon from '../../assets/check.png'


function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>

      <h2>Front-End</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill= "HTML" />
        <SkillList src={checkMarkIcon} skill= "CSS" />
        <SkillList src={checkMarkIcon} skill= "Javascript" />
      </div>
           <hr />

      <h2>FrameWork</h2>
      <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill= "React" />
      </div>
            <hr />

      <h2>Back-End</h2>
      <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill= "Node.js" />
          <SkillList src={checkMarkIcon} skill= "Express" />
          <SkillList src={checkMarkIcon} skill= "Next.js" />
          <SkillList src={checkMarkIcon} skill= "Java" />
      </div>
        <hr />
      
      <h2>DataBase</h2>
      <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill= "SQL" />
          <SkillList src={checkMarkIcon} skill= "Mango DB" />
      </div>
      

    </section>
  );
}

export default Skills;