function SkillList({ checkmark, skill }) {
  return (
    <div>
      <span>
        <img src={checkmark} alt="Checkmark icon" />
        <p>{skill}</p>
      </span>
    </div>
  );
}

export default SkillList;
