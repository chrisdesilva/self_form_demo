import "./App.css";
import { Formik, Form, Field } from "formik";
import arrow from "./images/White_Arrow.svg";
import logo from "./images/GiantRobotLTD_Logo.svg";

function App() {
  return (
    <div className="container">
      <div className="welcome">
        <div>
          {" "}
          <img src={logo} alt="Giant Robot Ltd." />
          <h1>Welcome</h1>
          <p>Please tell us a bit about yourself to get started.</p>
        </div>
      </div>
      <div className="form">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            address2: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            if (!values.lastName) {
              errors.lastName = "Required";
            }
            if (!values.address) {
              errors.address = "Required";
            }
            return errors;
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <div className="input">
                <label htmlFor="firstName">
                  First Name{" "}
                  {errors.firstName && touched.firstName && (
                    <span>{errors.firstName}</span>
                  )}
                </label>
                <Field
                  className={
                    errors.firstName && touched.firstName
                      ? "input--error"
                      : !errors.firstName && values.firstName && "filled"
                  }
                  type="text"
                  name="firstName"
                />
              </div>
              <div className="input">
                <label htmlFor="lastName">
                  Last Name{" "}
                  {errors.lastName && touched.lastName && (
                    <span>{errors.lastName}</span>
                  )}
                </label>
                <Field
                  className={
                    errors.lastName && touched.lastName
                      ? "input--error"
                      : !errors.lastName && values.lastName && "filled"
                  }
                  type="text"
                  name="lastName"
                />
              </div>
              <div className="input">
                <label htmlFor="address">
                  Address{" "}
                  {errors.address && touched.address && (
                    <span>{errors.address}</span>
                  )}
                </label>
                <Field
                  className={
                    errors.address && touched.address
                      ? "input--error"
                      : !errors.address && values.address && "filled"
                  }
                  type="text"
                  name="address"
                />
              </div>
              <div className="input">
                <label htmlFor="address2">Address 2 (Optional) </label>
                <Field
                  className={values.address2 && "filled"}
                  type="text"
                  name="address2"
                />
              </div>
              <button type="submit">
                Next <img src={arrow} alt="Right arrow" />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
