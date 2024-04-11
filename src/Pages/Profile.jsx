import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
  const { profileUpted } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    profileUpted(data?.fullNames, data?.photos)
      .then(res => {
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
