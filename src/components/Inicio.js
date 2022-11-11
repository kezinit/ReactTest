import styles from "./Inicio.module.css";
import Swal from 'sweetalert2';

function Inicio() {

    return(
        <div className={styles.content}>
            <nav className={styles.navTop}>
                <ul className={styles.ulNav}>
                <li className={styles.liNav}>
                        Portifólio
                    </li>
                    <li className={styles.liNav}>
                        Experiências
                    </li>
                    <h1 className={styles.h1Nav}>Kezinit</h1>
                    {/* <h2 className={styles.h2Nav}>Programador de Designer</h2> */}
                    <div className={styles.divli}>
                    <li className={styles.liNav}>
                        Sobre Mim
                    </li>
                    <li className={styles.liNav}>
                        Contato
                    </li>
                    </div>
                </ul>
            </nav>
            <div>

            </div>
        </div>
    )
}

export default Inicio;