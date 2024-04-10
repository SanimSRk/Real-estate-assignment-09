import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PropertyCarts from '../Compment/PropertyDeatils/PropertyCarts';
import { getLockalSroges } from '../Uitly/LockalStroges';
const Property = () => {
  const [userProperty, setPropertys] = useState([]);
  const propertys = useLoaderData();

  useEffect(() => {
    const getStroges = getLockalSroges();
    const port = propertys.filter(ports => getStroges.includes(ports.id));

    setPropertys(port);
  }, []);

  return (
    <div className="w-[88%] mx-auto">
      <div className="bg-base-200 p-7 rounded-lg text-center mt-4">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
          Yours courrent property{' '}
        </h2>
      </div>
      <div>
        {userProperty.map(prts => (
          <PropertyCarts key={prts.id} prts={prts}></PropertyCarts>
        ))}
      </div>
    </div>
  );
};

export default Property;
