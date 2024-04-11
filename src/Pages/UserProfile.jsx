import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const UserProfile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'HomeHaven / User Profile';
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="50"
      className=" rounded-lg border-2 border-[#FF9638] w-1/3 mb-[80px] text-center mx-auto shadow-lg p-6 mt-6 grid justify-center"
    >
      <div className=" w-[200px] mx-auto grid justify-center ">
        <img
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="50"
          className="w-full "
          src={
            user?.photoURL ||
            'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
          }
          alt=""
        />
      </div>
      <h2
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="2800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="50"
        className="text-[#FF9638] mt-3 text-2xl font-bold"
      >
        {user?.displayName || 'Name not found'}
      </h2>
      <h2
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="50"
        className="mt-4"
      >
        Email : {user?.email || 'Email is not found'}
      </h2>
    </div>
  );
};

export default UserProfile;
