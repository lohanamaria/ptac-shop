import { useParams } from "next/navigation";

export default function Product (){
  return(
    <p>id: {params.id} </p>
  );
}