import * as yup from "yup"

export const pseudoValidator = yup
  .string()
  .min(3)
  .max(20)
  .matches(/^[a-zA-Z0-9 ]+$/, "special characters are not allowed")
  .label("pseudo")

export const emailValidator = yup.string().min(3).max(50).email().label("email")

export const passwordValidator = yup.string().min(3).max(50).label("Password")
