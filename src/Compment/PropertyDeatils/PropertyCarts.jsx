import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const PropertyCarts = ({ prts }) => {
  const { image, title, segment_name, area, facilities, location } = prts;
  return (
    <div
      data-aos="fade-down-right"
      data-aos-duration="1000"
      className="shadow-lg p-6 mb-4 mt-12 rounded-lg md:flex lg:flex gap-4"
    >
      <div className="bg-base-200 p-6 lg:w-1/3 md:w-1/2">
        <img
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="w-full bg-center bg-cover"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h2
          data-aos="fade-down"
          data-aos-duration="1800"
          className="text-xl font-semibold"
        >
          {title}
        </h2>
        <h2
          data-aos="fade-down"
          data-aos-duration="1900"
          className=" font-bold mt-3"
        >
          #{segment_name}
        </h2>
        <div
          data-aos="fade-down-left"
          data-aos-duration="2100"
          className="flex justify-between"
        >
          <p className="text-xl font-semibold mt-4">Area :{area} </p>
          <button className="btn text-white bg-[#FF9638]">Viewo Details</button>
        </div>
        <h2
          data-aos="fade-left"
          data-aos-duration="2200"
          className="text-xl font-semibold my-4"
        >
          facilities
        </h2>
        {facilities?.map((faclit, index) => (
          <li data-aos="fade-left" data-aos-duration="2500" key={index}>
            {faclit}
          </li>
        ))}
        <h2 data-aos="fade-up" data-aos-duration="3000">
          location : {location}
        </h2>
      </div>
    </div>
  );
};

export default PropertyCarts;
