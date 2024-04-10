import { useContext } from 'react';
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
    profileUpted(data.fullNames, data.photos)
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="mb-[100px] shadow-lg md:w-2/3 lg:w-1/2 mx-auto p-6 mt-6 rounded-lg">
      <h2 className="text-center text-2xl font-bold">Update Your Profile</h2>
      <div className="">
        <form onClick={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              {...register('fullNames')}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              {...register('photos')}
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
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
