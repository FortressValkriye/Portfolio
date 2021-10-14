import Layout from "~/components/layout";
import styles from "~/styles/NotFound.module.scss";
export default function NotFoundPage() {
  return (

      <div className={styles["not-found"]}>
        <h1>404</h1>
        <h3>You found yourself in an unknown place.</h3>
      </div>

  );
}
