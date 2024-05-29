'use server'
import styles from "./main.module.css";
import Image from "next/image";

 
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
  /*   <main className={styles.card}>  */

        <div className="main">
        {produtos.map((produto) => (
        <div  className="card"key={produto. id}>
        <img src={produto. image} alt={produto.title} />
        <h3>{produto.title}</h3>
        <p>{produto.description}</p>
        <p>Category: {produto.category.name}</p>
        <p>Price: ${produto.price}</p>
        <p>Rating: {produto.rating.count}stars</p>
        </div>
        ))}
        </div>

       /*  </main> */
           );
    }; 
