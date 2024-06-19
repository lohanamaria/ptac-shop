'use client'
import { useState, useEffect } from "react";
import styles from "./main.module.css";
import Spinner from "./Spinner"
/* async eh so p server e funcao assincrona no renderiza o que eh recebido, n faz manuntecao e relacao de estados, como o useEffect
no servidor n manipula, so vai receber e renderizar
ja no cliente, as infos podem ser manipuladas, com uso de filter e useeffect
 */
export default function Main() {
/*     const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetch = async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
            setProdutos(data);
        };
        fetch();
      }, []); */
        const  [listProduct, setProduct] = useState([]);

        useEffect(() => {      
          const getProduct = async() => {      
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProduct(data);
}
          getProduct();
         },[]);
        /* acao de efeito vai surgir quando uma lista vazia existir */

      const orderAz = () => {
          const listAux = [...listProduct].sort((a, b) =>
          a.title.localeCompare(b.title) );
          
        setProduct(listAux);
        } 
    
        const orderZa = () => {
          const listAux = [...listProduct].sort((a, b) =>
          b.title.localeCompare(a.title) );

      /*    ou listAux = listAux.reverse(); 
      rota ou componente ou lista*/
        setProduct(listAux);

        }
        const ordermenorparamaior = () => {
          const listAux = [...listProduct].sort((a, b) => a.price - b.price);
          setProduct(listAux);
        };
        
        const ordermaiorparamenor = () => {
          const listAux = [...listProduct].sort((a, b) => b.price - a.price);
          setProduct(listAux);
        };
    
        if (listProduct[0] == null){
return <Spinner/>
        }

      return (
        <> 
        <div className={styles.filters}>
        <div>
          <button onClick={orderAz}> Az </button>
          <button onClick={orderZa}> Za </button>
          <button onClick={ordermaiorparamenor}> Preço decrescente </button>
          <button onClick={ordermenorparamaior}> Preço crescente </button>
        </div>
        </div>
   <main className={styles.main}> 

        {/* <div class="row" className={styles.row}>
        <div class="column" className={styles.column}> */}
        {listProduct.map((produto) => (

        <div class="card" className={styles.card} key={produto. id}>
          <br/>

        <img src={produto. image} className={styles.image} alt={produto.title} />

        <h3 className={styles.paragrafo}>{produto.title}</h3>
        <p className={styles.paragrafo}>{produto.description}</p>
        <p className={styles.paragrafo}>Category: {produto.category.name}</p>
        <p className={styles.paragrafo}>Price: ${produto.price}</p>
        <p className={styles.paragrafo}>Rating: {produto.rating.count}stars</p>

        <button className={styles.button} class="button">Adicionar</button>

        </div>
        
        ))}
       </main>
       </>
      ); 
        };