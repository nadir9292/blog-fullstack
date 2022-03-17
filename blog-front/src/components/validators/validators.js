import * as yup from "yup"

export const emailValidator = yup.string().min(3).max(50).label("email")

export const passwordValidator = yup.string().min(3).max(50).label("Password")
