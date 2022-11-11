import styles from "./Inicio.module.css";
import Swal from 'sweetalert2';

function Inicio() {

    return(
        <div className={styles.content}>
            <nav className={styles.navTop}>
                <ul className={styles.ulNav}>
                    <h1 onMouseOver={Swal.fire('Any fool can use a computer')} className={styles.h1Nav}>TESTES</h1>
                    <li className={styles.liNav}>
                        Duvidas
                    </li>
                </ul>
            </nav>
            <div>

            </div>
        </div>
    )
}

export default Inicio;