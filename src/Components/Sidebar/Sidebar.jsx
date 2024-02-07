import styles from "./Sidebar.module.css";
import Step from "./Step/Step";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ol className={styles.list}>
        <Step
          id={"personal-info"}
          num={1}
          title={"STEP 1"}
          info={"YOUR INFO"}
        />
        <Step
          id={"select-plan"}
          num={2}
          title={"STEP 2"}
          info={"SELECT PLAN"}
        />
        <Step id={"addons"} num={3} title={"STEP 3"} info={"ADD-ONS"} />
        <Step id={"summary"} num={4} title={"STEP 4"} info={"SUMMARY"} />
      </ol>
    </div>
  );
};

export default Sidebar;
