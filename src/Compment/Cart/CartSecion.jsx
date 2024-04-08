import { useEffect, useState } from 'react';
import Cartds from './Cartds';

const CartSecion = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/Data.json')
      .then(res => res.json())
      .then(jsonData => setData(jsonData));
  }, []);

  return (
    <div className="w-[88%] mx-auto my-[100px]">
      <div className="lg:w-2/3 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">
          Best Deals for rent and sale
        </h2>
        <p>
          Discover the perfect blend of comfort, luxury, and affordability with
          our exclusive residential deals! Whether you're searching for a cozy
          apartment, a spacious family home, or a tranquil retreat, we have the
          perfect property to suit your lifestyle and budget.
        </p>
      </div>
      <div className="gap-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-7">
        {data.map(resnt => (
          <Cartds key={resnt.id} resnt={resnt}></Cartds>
        ))}
      </div>
    </div>
  );
};

export default CartSecion;
