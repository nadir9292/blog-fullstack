import Layout from "../src/components/Layout"
import { useContext, useEffect } from "react"
import { AppContext } from "../src/components/AppContext"
import useApi from "../src/components/useApi"
import Text from "../src/components/Text"
import Button from "../src/components/Button"
import Link from "next/link"

const Index = () => {
  const { jwt, logout } = useContext(AppContext)
  const posts = useApi([], "get", "/posts")

  return (
    <Layout title="Zwitter" islogged={!jwt} logout={logout}>
      {jwt === null ? (
        <Text>You must be logged in to post !</Text>
      ) : (
        <Link href="/newPost">
          <a>
            <Button variant="primary" size="lg">
              New Posts
            </Button>
          </a>
        </Link>
      )}
      <div className="grid grid-cols-1 gap-3 px-80 ">
        {posts.map(
          ({ id, title, content, publication_date, userId }, index) => (
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
              <Link
                href={{
                  pathname: "/viewComments",
                  query: `postId=${id}`,
                }}
              >
                <a>
                  <Text variant="post_content" size="sm">
                    View Comment
                  </Text>
                </a>
              </Link>
            </div>
          )
        )}
      </div>
    </Layout>
  )
}

export default Index
