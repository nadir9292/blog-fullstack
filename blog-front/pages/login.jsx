import Layout from "../src/components/Layout"
import { Formik } from "formik"
import FormField from "../src/components/formUI/FormField"
import Button from "../src/components/Button"
import Text from "../src/components/Text"
import {
  emailValidator,
  passwordValidator,
} from "../src/components/validators/validators"
import * as yup from "yup"
import { useCallback, useState } from "react"
import Link from "next/link"
import { makeClient } from "../src/services/api"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  email: emailValidator.required(),
  password: passwordValidator.required(),
})

const Login = () => {
  const [error, setError] = useState(null)
  const handleFormSubmit = useCallback(async ({ email, password }) => {
    setError(null)
    try {
      const { data } = await makeClient().post("/login", { email, password })
    } catch (err) {
      const { response: { data } = {} } = err
      if (data.error) {
        setError(data.error)
        return
      }
      setError("Oops, something went wrong.")
    }
  }, [])

  return (
    <div className="flex justify-center m-10">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            className="bg-zinc-200 shadow-lg rounded p-10 mb-4 items-center"
          >
            {error ? (
              <p className="bg-red-600 text-white font-bold px-4 py-2">
                {error} 😕
              </p>
            ) : null}

            <div className="flex flex-col">
              <Text variant="login_register" size="lg">
                Sign in to Zwitter
              </Text>
              <FormField name="email" type="email">
                E-mail
              </FormField>
              <FormField name="password" type="password">
                Password
              </FormField>
              <Button
                type="submit"
                //find a way to disable the button from the beginning
                disabled={isSubmitting || !isValid}
                variant="btnValidation"
                size="lg"
              >
                Log in
              </Button>
              <Text variant="info" sizes="sm">
                Don't have an account ?&nbsp;
                <Link href="/register">
                  <a>
                    <Text variant="link">Sign Up</Text>
                  </a>
                </Link>
              </Text>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

Login.getLayout = (page) => <Layout title="Zwitter"> {page} </Layout>

export default Login
