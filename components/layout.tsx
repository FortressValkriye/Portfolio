import styles from "~/styles/Layout.module.scss";
import NaviDrawer from "./navi-drawer";

export default function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <NaviDrawer />
      <div className={styles["page-content"]}> {children} </div>

      <footer className={styles.footer}>
        <p className={styles["created-by"]}>
          Created with <span className={styles["love-emoji"]}>♥️</span> by
          FortressValkyrie
        </p>
        <p>Color pallete by the Dracula theme project. Hosted with Vercel.</p>
      </footer>
    </div>
  );
}
