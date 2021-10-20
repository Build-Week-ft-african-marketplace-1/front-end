import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().required("Email is required"),
    name: yup.string().required("Name is required"),
    terms: yup.boolean().oneOf([true],"Must Accept the Terms of Service"),

  });

export default schema;