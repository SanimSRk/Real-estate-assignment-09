import { Link } from 'react-router-dom';

const Cartds = ({ resnt }) => {
  const { id, image, title, status, segment_name, facilities, price, area } =
    resnt;
  return (
    <div className="shadow-lg p-4 ">
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="-mt-12 text-end ">
          <button className="border-none text-white bg-[#FF9638] rounded-none  btn uppercase  font-bold">
            {status}
          </button>
        </div>
      </div>

      <h2 className="text-xl mt-3 font-semibold">{segment_name}</h2>
      <div>
        <h2 className="text-xl font-semibold mt-3">Facilities</h2>
        {facilities?.map(facil => (
          <li key={id}>{facil}</li>
        ))}
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div className="">
          <h2 className="font-semibold">Price : {price}</h2>
        </div>
        <div>
          <p className="font-semibold">Area : {area}</p>
        </div>
      </div>
      <Link to={`/cartDeatils/${id}`}>
        <button className="btn mt-6 font-semibold text-white bg-[#FF9638]">
          View Property
        </button>
      </Link>
    </div>
  );
};

export default Cartds;
