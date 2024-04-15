import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className="py-[70px] bg-neutral text-neutral-content mt-[100px]">
      <div className="w-[88%] mx-auto">
        <div>
          <h2 className="text-center text-3xl gap-0 font-extrabold ">
            Home
            <span className="text-[#FF9638]">Haven</span>
          </h2>
        </div>

        <div className="justify-center border-y py-5 mt-4 flex lg:gap-6 md:gap-5 gap-3">
          <FaFacebook className="text-white text-4xl"></FaFacebook>
          <FaInstagram className="text-white text-4xl"></FaInstagram>
          <FaGithub className="text-white text-4xl"></FaGithub>
          <FaTwitter className="text-white text-4xl"></FaTwitter>
        </div>
        <footer className=" footer p-10 ">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Property Sales</a>
            <a className="link link-hover">Property Management</a>
            <a className="link link-hover">Home Valuation</a>
            <a className="link link-hover">Property Rent</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer footer-center text-white p-4 bg-neutral ">
          <aside>
            <p>
              Copyright © 2024 - All right reserved by HomeHaven Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
