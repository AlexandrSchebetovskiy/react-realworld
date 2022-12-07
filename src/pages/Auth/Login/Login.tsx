import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { login } from "../authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });
  const formChangeHandler = (value: string, field: string) => {
    setFormValues((prevState) => ({ ...prevState, [field]: value }));
  };

  function submitHandler(event: any) {
    event.preventDefault();
    dispatch(login({ user: formValues }));
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link to="/register">Do you want to sign up?</Link>
            </p>

            <ul className="error-messages">
              {/*<li>That email is already taken</li>*/}
            </ul>

            <form onSubmit={submitHandler}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  name="email"
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
                  placeholder="Password"
                  value={formValues.password}
                  onChange={(e) =>
                    formChangeHandler(e.target.value, "password")
                  }
                />
              </fieldset>
              <button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
