import Link from "next/link";
import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <div className={styles.menu}>
      <nav>
        <Link href="/admin/colaborator">Colaborador</Link>
        <Link href="/admin/project">Projeto</Link>
        <Link href="/admin/report">Relatório</Link>
      </nav>
    </div>
  );
}
