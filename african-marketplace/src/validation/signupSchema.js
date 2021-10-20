import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().required("Password is required"),
    name: yup.string().required("Password is required"),

  });

export default schema;