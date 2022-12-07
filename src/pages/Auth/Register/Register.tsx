import React from "react";
import { Link } from "react-router-dom";
import { login, registration } from "../authSlice";
import { useAppDispatch } from "../../../store/hooks";

const Register = () => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const formChangeHandler = (value: string, field: string) => {
    setFormValues((prevState) => ({ ...prevState, [field]: value }));
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registration({ user: formValues }));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form onSubmit={submitHandler}>
              <fieldset className="form-group">
                <input
                  value={formValues.username}
                  onChange={(e) =>
                    formChangeHandler(e.target.value, "username")
                  }
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  value={formValues.email}
                  onChange={(e) => formChangeHandler(e.target.value, "email")}
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  value={formValues.password}
                  onChange={(e) =>
                    formChangeHandler(e.target.value, "password")
                  }
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
