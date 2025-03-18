import * as Yup from "yup";

// regex 
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

signupFormValidation = Yup.object({
    first_name: Yup.string()
      .required("First name is required")
      .trim()
      .nullable(),
    last_name: Yup.string().required("Last name is required").nullable(),
    institution: Yup.string().required("Institution is required").nullable(),
    role_id: Yup.string().required("Role is required").nullable(),
    email: Yup.string()
      .matches(emailRegex, "Incorrect email format")
      .required("Email is required")
      .nullable(),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long. Password can contain at least one capital letter, one lowercase letter and one number."
      )
      .nullable(),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password and confirm password does not match"
      )
      .required("Confirm password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long. Password can contain at least one capital letter, one lowercase letter and one number."
      )
      .nullable(),
    full_phone_number: Yup.number().typeError("Please enter number").positive().integer("Please enter number"),
    security_question_id: Yup.string()
      .required("Security question is required")
      .nullable(),
    security_question_answer: Yup.string()
      .required("Security answer is required")
      .nullable(),
    accept_terms_and_conditions: Yup.boolean()
      .oneOf(
        [true],
        "You must accept the terms and conditions to sign up your account!"
      )
      .required(
        "You must accept the terms and conditions to sign up your account!"
      ),
    url: Yup.string()
      .matches(urlRegex, "Incorrect URL format")
      .required("URL is required")
      .nullable(),
    pdf_file: Yup.mixed().required('File is required')
      .test('fileFormat', 'Invalid File format', value => {
        if (value) {
          const supportedFormats = ['pdf'];
          return supportedFormats.includes(value.name.split('.').pop());
        }
        return true;
      })
  });

-- list of formik validation
--------------------------------------
1) String required , regex
2) Phone number (ref => full_phone_number)
3) Checkbox (ref => accept_terms_and_conditions)
4) File type validation (ref => pdf_file)
5) Password, Confirm password (ref => password, confirm_password)
6) URL (ref => url)
