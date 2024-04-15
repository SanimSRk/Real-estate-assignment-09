import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
  const { profileUpted, user, setUser } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data.email);
    profileUpted(data?.fullNames, data?.photos)
      .then(res => {
        setUser({
          displayName: data?.fullNames,
          photoURL: data?.photos,
          email: data?.email,
        });
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = 'HomeHaven / Update Profile';
  }, []);
  return (
    <div className="mb-[100px] border-2 border-[#FF9638] shadow-lg md:w-2/3 lg:w-1/2 mx-auto p-6 mt-6 rounded-lg">
      <h2 className="text-center text-2xl font-bold text-[#FF9638]">
        Update Your Profile
      </h2>
      <div className=" text-center grid justify-center">
        {
          <img
            className="rounded-full w-[140px] mx-auto mt-3"
            src={
              user?.photoURL ||
              'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
            }
            alt=""
          />
        }
        <h2 className="mt-3 text-xl font-semibold">
          {user?.displayName || 'Name not found'}{' '}
        </h2>
        <h2 className="mt-5">Email : {user?.email || 'Email Not found'}</h2>
      </div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered border-[#FF9638]"
              required
              {...register('fullNames', { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url ...</span>
            </label>
            <input
              type="text"
              placeholder="Photo url"
              className="input input-bordered border-[#FF9638]"
              required
              {...register('photos', { required: true })}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-4">
            <input
              className="btn text-white bg-[#FF9638]"
              type="submit"
              value="Update Profile"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
