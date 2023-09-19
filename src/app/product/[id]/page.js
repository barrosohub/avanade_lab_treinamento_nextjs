/**
 * Renders a product page with the given ID.
 * @param {Object} props - The props object.
 * @param {Object} props.params - The params object containing the product ID.
 * @param {string} props.params.id - The ID of the product to render.
 * @returns {JSX.Element} A JSX element representing the product page.
 */
export default function Product({ params }) {
    const { id } = params
  return <p>Product ID: {id} (via app router)</p>
}