import { useParams } from "react-router";

export default function User() {

  const { id } = useParams();   // url ka :id value mil jayega

  return (
      <h1>User ID: {id}</h1>
  )
}
