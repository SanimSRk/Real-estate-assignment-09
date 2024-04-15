import { useLoaderData, useParams } from 'react-router-dom';
import { setLocalStroges } from '../Uitly/LockalStroges';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CartDetails = () => {
  const DeatilsData = useLoaderData();

  const { id } = useParams();
  const intId = parseInt(id);
  const datas = DeatilsData.find(dat => dat.id === intId);
  const {
    image,
    title,
    segment_name,
    description,
    price,
    status,
    area,
    facilities,
    location,
  } = datas;
  const handileClicksDeatils = () => {
    setLocalStroges(intId);
  };

  useEffect(() => {
    document.title = `HomeHaven / ${segment_name}`;
  }, []);

  return (
    <div className="w-[88%] mx-auto mt-4 ">
      <div className=" lg:flex gap-5">
        <div className=" lg:w-1/2 ">
          <img
            className="w-full h-full rounded-lg object-cover object-center   "
            src={image}
            alt=""
          />
        </div>
        <div className=" lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 ">{title}</h2>
          <h2 className="  font-bold mt-4">#{segment_name}</h2>
          <p className="mt-3">description: {description}</p>
          <div className=" block md:flex lg:flex gap-6 my-4 ">
            <button className="btn  bg-[#FF9638] text-white">
              Price:{price}
            </button>
            <button className="btn  bg-[#FF9638] text-white">
              status: {status}
            </button>
            <button className="btn  bg-[#FF9638] text-white">
              Area: {area}
            </button>
          </div>
          <div>
            <h2>facilities</h2>
            <div>
              {facilities.map((fac, indx) => (
                <li key={indx}>{fac}</li>
              ))}
            </div>
            <div className="mt-4">
              <h2>location : {location}</h2>
            </div>

            <div className="mt-7 ">
              <button
                onClick={handileClicksDeatils}
                className="btn w-full md:w-1/2 lg:w-1/2
                bg-[#FF9638] text-white text-xl font-semibold"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
