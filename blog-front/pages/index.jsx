import Layout from "../src/components/Layout"

const index = () => {
  return (
    <>
      <h1>Hello WORLD</h1>
    </>
  )
}

index.getLayout = (page) => <Layout title="Twittor"> {page} </Layout>

export default index
