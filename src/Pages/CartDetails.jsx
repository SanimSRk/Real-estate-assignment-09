import { useLoaderData, useParams } from 'react-router-dom';
import { setLocalStroges } from '../Uitly/LockalStroges';
import { useEffect } from 'react';

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
    <div className="w-[88%] mx-auto mt-4 mb-[100px]">
      <div>
        <img
          className="w-full rounded-lg object-cover object-center  md:h-[380px] lg:h-[550px]"
          src={image}
          alt=""
        />
        <div className="-mt-14 ml-4">
          <button
            onClick={handileClicksDeatils}
            className="btn  bg-[#FF9638] text-white text-xl font-semibold"
          >
            Buy Now
          </button>
        </div>
      </div>
      <h2 className="text-center text-2xl md:text-4xl lg:text-4xl font-bold mt-4">
        {segment_name}
      </h2>
      <h2 className="text-2xl font-semibold mb-4 mt-7">{title}</h2>
      <p className="lg:w-1/2">description: {description}</p>
      <div className=" block md:flex lg:flex gap-6 my-4 ">
        <button className="btn  bg-[#FF9638] text-white">Price:{price}</button>
        <button className="btn  bg-[#FF9638] text-white">
          status: {status}
        </button>
        <button className="btn  bg-[#FF9638] text-white">Area: {area}</button>
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
      </div>
    </div>
  );
};

export default CartDetails;
