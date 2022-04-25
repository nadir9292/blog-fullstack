import Layout from "../src/components/Layout"
import { useContext } from "react"
import { AppContext } from "../src/components/AppContext"
import useApi from "../src/components/useApi"
import Text from "../src/components/Text"
import Button from "../src/components/Button"

const Index = () => {
  const { jwt } = useContext(AppContext)
  const posts = useApi([], "get", "/posts")

  return (
    <div>
      <Button variant="primary" size="lg" disabled={!jwt}>
        New Post
      </Button>

      <div className="grid grid-cols-1 gap-3 px-80">
        {posts.map(({ title, content, publication_date, userId }, index) => (
          <div key={index}>
            <Text variant="post_title" size="xl">
              {title}
            </Text>
            <Text variant="post_author" size="sm">
              by {userId}, {publication_date}
            </Text>
            <Text variant="post_content" size="md">
              {content}
            </Text>
            <Text variant="post_content" size="md">
              ...
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

Index.getLayout = (page) => <Layout title="Zwitter">{page}</Layout>

export default Index
