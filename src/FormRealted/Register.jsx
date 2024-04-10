import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
const Register = () => {
  const { creatAuccount, profileUpted } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const [errorss, setErrors] = useState('');
  const [shows, setShows] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if (data.password.length < 6) {
      setErrors('Password should be at least 6 characters');
      return;
    } else if (!/[A-Z]/.test(data?.password)) {
      setErrors('Password does not have at least one uppercase letter');
    } else if (!/[a-z]/.test(data?.password)) {
      setErrors('Password does not have at least one lowercase letter');
    } else {
      setErrors(null);
    }

    creatAuccount(data?.email, data?.password)
      .then(() => {
        profileUpted(data?.fullName, data?.photo).then(() => {
          Navigate(location?.state || '/');
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="  w-full md:w-2/3 hero-content flex-col lg:flex-row-reverse">
          <div className="border-2 border-[#FF9638] card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="text-2xl text-[#FF9638] text-center font-bold">
                Registration Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered  border-[#FF9638]"
                  required
                  {...register('fullName', { required: true })}
                />
              </div>
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
                  <span className="label-text">Photo Url...</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo "
                  className="input input-bordered border-[#FF9638]"
                  required
                  {...register('photo', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="input border-[#FF9638] input-bordered flex justify-between items-center">
                  <input
                    type={shows ? 'text' : 'password'}
                    placeholder="password"
                    className=" "
                    required
                    {...register('password', { required: true })}
                  />
                  <span onClick={() => setShows(!shows)} className="text-2xl">
                    {shows ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
                  </span>
                </div>

                <h2 className="text-red-600 font-semibold">{errorss}</h2>
              </div>
              <div className="form-control mt-4">
                <input
                  className="btn  bg-[#FF9638] text-white"
                  type="submit"
                  value="Registraion"
                />
              </div>
              <h2 className="text-center">
                Alredy account ?
                <Link to={'/login'}>
                  <span className="font-semibold text-blue-600">Login</span>
                </Link>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
