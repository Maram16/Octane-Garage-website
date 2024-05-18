import * as Yup from 'yup';

export const userSchemaValidation = Yup.object().shape({
  firstname: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters long'),
  lastname: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters long'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(8, 'Phone number must be at least 8 digits long')
    .required('Phone number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});

export default userSchemaValidation;
