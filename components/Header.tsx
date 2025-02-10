import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import { FaHome } from "react-icons/fa";

const Header = ({
  homeIcon,
  banner,
}: {
  homeIcon?: boolean;
  banner?: string;
}) => {

    const router = useRouter()
  return (
    <div className={styles.header}>
      <h1>{banner}</h1>
      {homeIcon ? <FaHome className={styles.homeIcon} fontSize={30} onClick={()=>router.push("/")} /> : null}
    </div>
  );
};

export default Header;
