import { useParams } from "react-router";

export default function Product() {
  const { category, id } = useParams();
  return (
    <h2>
      Category: {category} | Product ID: {id}
    </h2>
  );
}
