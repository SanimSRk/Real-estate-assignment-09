import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const { LoginUsers, user } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const [errorMassge, setErrorsMassge] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (!user) {
      toast('Incorrect email or Password!');
      setErrorsMassge('Incorrect email or Password');
    }
    LoginUsers(data.email, data.password)
      .then(res => {
        if (res.user) {
          Navigate(location?.state ? location.state : '/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" lg:w-[50%] hero-content flex-col lg:flex-row-reverse">
          <div className=" card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register('email', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <h2 className=" text-center font-semibold text-red-600">
                {errorMassge}
              </h2>
              <div className="form-control mt-4">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>

              <h2 className="text-center">
                Do not have a account ?
                <Link to={'/register'}>
                  <span className="font-semibold text-blue-600">
                    registration now
                  </span>
                </Link>
              </h2>

              {/* <ToastContainer className={'rounded-lg'}></ToastContainer> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
