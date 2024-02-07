import styles from "./ThankYou.module.css";
import logo from "../../assets/images/icon-thank-you.svg/";
const ThankYou = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="thank you" />
      <h1>Thank you!</h1>
      <h2>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support. please feel free to email us at
        support@loremgaming.com.
      </h2>
    </div>
  );
};

export default ThankYou;
