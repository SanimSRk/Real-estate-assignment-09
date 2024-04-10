import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  return (
    <div className="w-1/3 mb-[80px] text-center mx-auto shadow-lg p-6 mt-6 grid justify-center">
      <div className=" w-[200px] mx-auto grid justify-center ">
        <img
          className="w-full "
          src={
            user?.photoURL ||
            'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
          }
          alt=""
        />
      </div>
      <h2 className="mt-3 text-2xl font-bold">
        {user?.displayName || 'Name not found'}
      </h2>
      <h2 className="mt-4">Email : {user.email}</h2>
    </div>
  );
};

export default UserProfile;
