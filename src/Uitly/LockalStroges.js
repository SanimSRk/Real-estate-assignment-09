import { toast } from 'react-toastify';
const getLockalSroges = () => {
  const getStroges = localStorage.getItem('hous');
  if (getStroges) {
    return JSON.parse(getStroges);
  }
  return [];
};

const setLocalStroges = id => {
  const stroges = getLockalSroges();
  const isExist = stroges.find(realist => realist == id);

  if (!isExist) {
    toast.success('Succssfully  add your property!');
    stroges.push(id);
    localStorage.setItem('hous', JSON.stringify(stroges));
  } else {
    toast.error('Property alredy add !');
  }
};
export { setLocalStroges, getLockalSroges };
