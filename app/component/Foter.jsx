import Link from "next/link";

import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Foter = () => {
    return (
        <div>

  <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <p>Address: 121/b Ainjibi Samit Douel Bhavon,Court, Chattogram </p>
                        <p>Phone: 01305573617</p>
                        <p>Email: advocatehelp@gmail.com</p>
                    </div>
                    <div>
                        
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://www.youtube.com/@joinworkbd"><FaYoutube className="text-[#FF0000]  text-4xl " />   </Link>
   <Link href="https://www.facebook.com/share/hHvJcJJZPdfxK7p2"><FaFacebook className="text-[#1877F2]    text-4xl"  /></Link> 
    <FaTwitter className=" text-[#1DA1F2]  text-4xl"/>
               
               
              
            </div>
            <div className="text-center mt-4">
                <footer className="bg-gray-900 text-white p-4 text-center">
      <p>© 2025 AdvocateLinker.com | সকল অধিকার সংরক্ষিত</p>
    </footer> </div>
        </footer>
            
        </div>
    );
};

export default Foter