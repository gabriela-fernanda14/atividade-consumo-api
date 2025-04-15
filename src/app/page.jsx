import styles from "./page.module.css";
import Character
 from "./components/harryList";
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Character />
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido durante o curso de Desenvolvimento de Sistemas</p>
      </footer>
    </div>
  );
}