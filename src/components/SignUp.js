import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { registerUser } from '../redux/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      role: 'donor', // Default role is set to donor
    },
    onSubmit: (values) => {
      dispatch(registerUser(values));
      formik.resetForm();
      // Redirect to login page or other route after successful sign-up
    },
  });

  return (
    <>
      <Container>
        <form className="sign-up" onSubmit={formik.handleSubmit}>
          <h2 className="text-center mb-4">Sign up</h2>
          <div className="mb-4">
            <div className="form-outline">
              <input
                required
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="username">
                Username
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="form-outline">
              <input
                required
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="email">
                Email address
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="form-outline">
              <input
                required
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="form-outline">
              <input
                required
                type="password"
                name="confirm_password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="confirm_password">
                Confirm Password
              </label>
            </div>
          </div>
          {/* Role selection dropdown */}
          <div className="mb-4">
            <select
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              className="form-control"
            >
              <option value="donor">Donor</option>
              <option value="charity">Charity</option>
              <option value="administrator">Administrator</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignUp;