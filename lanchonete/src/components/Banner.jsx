import logo from '../assets/banner.jpg'; 

const Banner = () => {
  return (
    <div>
      <img src={logo} className="banner" alt="Banner da lanchonete" />
    </div>
  );
};

export default Banner;