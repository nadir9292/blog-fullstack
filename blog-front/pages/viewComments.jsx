import Layout from "../src/components/Layout"
import { useRouter } from "next/router"
import { useCallback, useContext, useState } from "react"
import { AppContext } from "../src/components/AppContext"
import useApi from "../src/components/useApi"
import Text from "../src/components/Text"
import Button from "../src/components/Button"
import { makeClient } from "../src/services/makeClient"
import { Formik } from "formik"
import * as yup from "yup"
import { contentValidator } from "../src/components/validators/validators"
import FormFieldArea from "../src/components/formUI/FormFieldArea"
import Popup from "../src/components/Popup"
import FormField from "../src/components/formUI/FormField"

const initialValues = {
  content: "",
  is_published: false,
  userId: null,
  postId: null,
}

const validationSchema = yup.object().shape({
  content: contentValidator.required(),
})

const viewComments = () => {
  const router = useRouter()
  const { jwt, logout, userId: id } = useContext(AppContext)
  const data = router.query
  const [buttonPopup, setButtonPopup] = useState(false)
  const [error, setError] = useState(null)
  const handleFormSubmit = useCallback(
    async ({ content, is_published, userId, postId }) => {
      setError(null)
      try {
        const { data } = await makeClient({
          headers: { authentification: jwt },
        }).post(`/viewComments`, {
          content,
          is_published,
          userId,
          postId,
        })
      } catch (err) {
        const { response: { data } = {} } = err
        if (data.error) {
          setError(data.error)
          return
        }
        setError("Oops, something went wrong.")
      }
    },
    []
  )

  // I know, I'm sorry...
  const sleep = (milliseconds) => {
    const date = Date.now()
    let currentDate = null
    do {
      currentDate = Date.now()
    } while (currentDate - date < milliseconds)
  }
  sleep(100)
  const posts = useApi([], "get", `/${data.postId}/viewPost`)
  const comments = useApi([], "get", `/viewComments?postId=${data.postId}`)

  return (
    <Layout title="Zwitter" islogged={!jwt} logout={logout}>
      <div className="grid grid-cols-1 gap-3 px-80 ">
        <Text variant="post_title" size="xl">
          {posts.title}
        </Text>
        <Text variant="post_author" size="sm">
          by {posts.userId}, {posts.publication_date}
        </Text>
        <Text variant="post_content" size="md">
          {posts.content}
        </Text>
        <div className="flex justify-center m-10">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, isValid, handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-200 shadow-lg rounded p-10 mb-4 items-center shadow-xl"
              >
                {error ? (
                  <p className="bg-red-600 text-white font-bold px-4 py-2">
                    {error} 😕
                  </p>
                ) : null}
                <div className="flex flex-col">
                  <Text variant="login_register" size="xl">
                    Write a new comment
                  </Text>
                  <FormFieldArea name="content" type="text">
                    Content
                  </FormFieldArea>
                  <FormField
                    name="postId"
                    type="text"
                    placeholder="please put the id of the post. (I am ashamed)"
                  >
                    n°post
                  </FormField>
                  <FormField
                    name="userId"
                    type="text"
                    placeholder="please put youre id user. (I am ashamed)"
                  >
                    n°user
                  </FormField>
                  <Button
                    type="submit"
                    onClick={() => setButtonPopup(true)}
                    disabled={isSubmitting || !isValid}
                    variant="btnValidation"
                    size="lg"
                  >
                    Post
                  </Button>
                </div>
                {error ? null : (
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <Text variant="popup">
                      Your comment has been published.
                    </Text>
                  </Popup>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 px-80 ">
        {comments.map(({ content, publication_date, userId }, index) => (
          <div key={index}>
            <Text variant="post_author" size="sm">
              by {userId}, {publication_date}
            </Text>
            <Text variant="post_content" size="md">
              {content}
            </Text>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default viewComments
