export default function User({ id }) {
  return <p>User ID: {id} (via page router)</p>
}

/**
 * Retrieves the server-side props for the user page with the given ID.
 * @param {Object} params - The parameters object containing the ID of the user.
 * @param {string} params.id - The ID of the user.
 * @returns {Object} The props object containing the ID of the user.
 */
export async function getServerSideProps({ params }) {
  return { props: { id: params.id } }
}