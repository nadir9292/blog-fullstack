import { Formik } from "formik"
import { useCallback, useContext, useState } from "react"
import Layout from "../src/components/Layout"
import { makeClient } from "../src/services/makeClient"
import * as yup from "yup"
import {
  titleValidator,
  contentValidator,
} from "../src/components/validators/validators"
import FormField from "../src/components/formUI/FormField"
import FormFieldArea from "../src/components/formUI/FormFieldArea"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import { AppContext } from "../src/components/AppContext"
import Popup from "../src/components/Popup"

const initialValues = {
  title: "",
  content: "",
  is_published: false,
  userId: null,
}

const validationSchema = yup.object().shape({
  title: titleValidator.required(),
  content: contentValidator.required(),
})

const NewPost = () => {
  const { jwt, logout } = useContext(AppContext)
  const { userId: id } = useContext(AppContext)
  const [buttonPopup, setButtonPopup] = useState(false)
  const [error, setError] = useState(null)
  const handleFormSubmit = useCallback(
    async ({ title, content, is_published, userId }) => {
      setError(null)
      try {
        const { data } = await makeClient({
          headers: { authentification: jwt },
        }).post(`/${id}/create-post`, {
          title,
          content,
          is_published,
          userId,
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

  return (
    <Layout title="Zwitter" islogged={!jwt} logout={logout}>
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
                  Write a new new post
                </Text>
                <FormField name="title" type="text">
                  Title
                </FormField>
                <FormFieldArea name="content" type="text">
                  Content
                </FormFieldArea>
                <FormField name="is_published" type="checkbox">
                  Publish
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
                  <Text variant="popup">Your article has been published.</Text>
                </Popup>
              )}
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default NewPost
