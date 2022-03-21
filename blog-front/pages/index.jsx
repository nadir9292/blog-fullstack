import Layout from "../src/components/Layout"

const Index = () => {
  return <h1>Hello WORLD</h1>
}

Index.getLayout = (page) => <Layout title="Zwitter"> {page} </Layout>

export default Index
