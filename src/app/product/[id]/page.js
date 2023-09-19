export default function Product({ params }) {
    const { id } = params
  return <p>Product ID: {id} (via app router)</p>
}