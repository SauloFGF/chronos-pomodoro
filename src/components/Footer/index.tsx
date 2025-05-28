import styles from './styles.module.css';

type FooterProps = {
  children: React.ReactNode;
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>
        Choronos Pompodoro &copy; {new Date().getFullYear()} - Feito com ❤
      </a>
    </footer>
  );
}
