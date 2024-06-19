import styles from "./footer.module.css";
import Image from "next/image"

export default function Footer(){

    return(
        <footer className={styles.rodape}>   
        <ul>
            <li>
                <a href="https://www.facebook.com/">
                     <p>facebook</p>
                     </a>
            </li>
            <li>
        <a href="https://www.instagram.com/schiaparelli/">
        <p>instagram</p>
        </a>
             </li>
             <li>
        <a href="https://www.twitter.com/">
        <p>twitter</p>
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/">
        <p>linkedin</p>
            </a>
        </li>
        
        <p>Data de criação: desde 2007 contra o capitalismo.</p>
        <p>Todos os direitos reservados.</p>

        </ul>
        </footer>
    )};
