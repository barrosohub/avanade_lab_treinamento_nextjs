export default function User({ id }) {
  return <p>User ID: {id} (via page router)</p>
}

export async function getServerSideProps({ params }) {
  return { props: { id: params.id } }
}