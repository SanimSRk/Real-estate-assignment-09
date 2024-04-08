const Cartds = ({ resnt }) => {
  const { image, title } = resnt;
  return (
    <div className="shadow-lg p-4 ">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
};

export default Cartds;
