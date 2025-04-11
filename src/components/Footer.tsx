
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-anandwan-50 border-t border-anandwan-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-anandwan-800 mb-4">
              Anandwan Careers Connect
            </h3>
            <p className="text-anandwan-700 mb-4 max-w-md">
              Bridging the gap between rehabilitated leprosy patients and 
              employers. Creating opportunities for dignified employment and inclusion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-anandwan-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-anandwan-600 hover:text-anandwan-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/job-seekers" className="text-anandwan-600 hover:text-anandwan-800 transition-colors">
                  For Job Seekers
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-anandwan-600 hover:text-anandwan-800 transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-anandwan-600 hover:text-anandwan-800 transition-colors">
                  About Anandwan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-anandwan-800 mb-4">Contact</h4>
            <address className="not-italic text-anandwan-600">
              <p>Anandwan, Warora</p>
              <p>Maharashtra, India</p>
              <p className="mt-2">contact@anandwancareers.org</p>
              <p>+91 1234 567890</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-anandwan-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-anandwan-600">
            &copy; {new Date().getFullYear()} Anandwan Careers Connect. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-anandwan-600 hover:text-anandwan-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-anandwan-600 hover:text-anandwan-800 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
