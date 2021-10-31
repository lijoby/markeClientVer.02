import * as yup from "yup";

export const userSchema=yup.object().shape({

    username:yup.string().required(),
    email:yup.string().email().required(),
    contactno:yup.string().required(),
    userid:yup.string().required(),
    password:yup.string().min(6).required()

})
