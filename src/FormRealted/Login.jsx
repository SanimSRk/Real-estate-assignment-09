import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const Login = () => {
  const { LoginUsers, user, googleSinig, gitHubSinig } =
    useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const [errorMassge, setErrorsMassge] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handileGoogleSinig = () => {
    googleSinig()
      .then(res => {
        if (res.user) {
          toast.success('succssfully login');
          Navigate(location?.state ? location.state : '/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handileClickGitgub = () => {
    gitHubSinig()
      .then(res => {
        if (res.user) {
          toast.success('succssfully login');
          Navigate(location?.state ? location.state : '/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onSubmit = data => {
    if (!user) {
      setErrorsMassge('Incorrect email or Password');
    }
    LoginUsers(data.email, data.password)
      .then(res => {
        if (res.user) {
          toast.success('succssfully login');
          Navigate(location?.state ? location.state : '/');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = 'HomeHaven / login';
  }, []);

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className=" lg:w-[50%] hero-content flex-col lg:flex-row-reverse">
          <div className="  border-2 border-[#FF9638] card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h2 className="text-[#FF9638] text-center text-2xl font-bold">
                Login Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered border-[#FF9638]"
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
                  className="input input-bordered border-[#FF9638]"
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
                  className="btn text-white bg-[#FF9638]"
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
              <div className="flex justify-center items-center gap-3  mt-2">
                <h2 className=" w-full border-b border-[#FF9638]"></h2>
                <h2>Or</h2>
                <h2 className=" w-full border-b border-[#FF9638]"></h2>
              </div>
              <div className="mt-3 flex justify-center gap-6">
                <button
                  onClick={handileGoogleSinig}
                  className="btn  btn-outline border-[#FF9638]"
                >
                  <FcGoogle className="text-3xl"></FcGoogle>{' '}
                </button>
                <button
                  onClick={handileClickGitgub}
                  className="btn border-[#FF9638] btn-outline"
                >
                  <BsGithub className="text-3xl"></BsGithub>{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
