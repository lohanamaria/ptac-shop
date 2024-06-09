'use server'
import styles from "./main.module.css";

export default async function Main() {
/*     const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetch = async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
            setProdutos(data);
        };
        fetch();
      }, []); */

      const response = await fetch("https://fakestoreapi.com/products");
      const produtos = await response.json();
    
      return (
   <main className={styles.main}> 

        {/* <div class="row" className={styles.row}>
        <div class="column" className={styles.column}> */}
        {produtos.map((produto) => (

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
           );
    }; 
