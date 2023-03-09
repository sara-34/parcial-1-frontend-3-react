import styles from "./Header.modules.css";

const Header = (props) => {
  const className = `${styles.header} ${styles.h1}`;
  return (
  <header className={className}>
    {props.title}
  </header>
  )
};

export default Header;