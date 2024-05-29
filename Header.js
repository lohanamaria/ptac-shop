import styles from "./header.module.css";
import Image from "next/image";

export default function Header(){
    <header className={styles.cabecalho}> 
    <h1>cabeçalho</h1>
    </header>
    return(
    <Image
      width={100} 
      height={100}
      src={"https://upload.wikimedia.org/wikipedia/commons/c/c0/Schiaparelli_logo.png"}/>
    )};