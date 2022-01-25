import styles from "~/styles/NotFound.module.scss";
export default function NotFoundPage() {
  return (
    <div className={styles["not-found"]}>
      <h1>404</h1>
      <p>You found yourself in an unknown place.</p>
    </div>
  );
}
