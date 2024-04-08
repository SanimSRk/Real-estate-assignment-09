import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" lg:w-[50%] hero-content flex-col lg:flex-row-reverse">
          <div className=" card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h2 className="text-center">
                Do not have a account ?
                <Link to={'/register'}>
                  <span className="font-semibold text-blue-600">
                    registration now
                  </span>
                </Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
