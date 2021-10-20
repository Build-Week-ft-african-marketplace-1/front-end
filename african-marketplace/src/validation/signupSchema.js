import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().required("Email is required").email('Must be a valid email, see example'),
    name: yup.string().required("Name is required"),
    terms: yup.boolean().oneOf([true], "Please Accept the Terms of Service to continue"),

  });

export default schema;