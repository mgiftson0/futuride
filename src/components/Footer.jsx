import logo from '../assets/logo.png';

const Footer = () => {
 return (
   <footer className="bg-white py-12">
     <div className="container mx-auto px-6">
       {/* Top Section with Logo and Columns */}
       <div className="grid grid-cols-4 gap-8 mb-8">
         {/* Logo Column */}
         <div className="col-span-1">
           <div className="flex items-center gap-3 mb-4">
             <img src={logo} alt="Logo" className="h-12" />
             <span className="text-xl font-bold text-gray-800">futuride</span>
           </div>
         </div>

         {/* Links Columns */}
         <div className="col-span-1 flex flex-col space-y-3">
           <h3 className="text-gray-800 font-semibold mb-2">Company</h3>
           <a href="/about" className="text-sm text-gray-600 hover:text-blue-600">About</a>
           <a href="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</a>
           <a href="/faq" className="text-sm text-gray-600 hover:text-blue-600">FAQ</a>
         </div>

         <div className="col-span-1 flex flex-col space-y-3">
           <h3 className="text-gray-800 font-semibold mb-2">Legal</h3>
           <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600">Privacy Policy</a>
           <a href="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms of Service</a>
         </div>

         <div className="col-span-1 flex flex-col space-y-3">
           <h3 className="text-gray-800 font-semibold mb-2">Social</h3>
           <a href="https://www.facebook.com" className="text-sm text-gray-600 hover:text-blue-600">Facebook</a>
           <a href="https://www.twitter.com" className="text-sm text-gray-600 hover:text-blue-600">Twitter</a>
           <a href="https://www.instagram.com" className="text-sm text-gray-600 hover:text-blue-600">Instagram</a>
           <a href="mailto:info@example.com" className="text-sm text-gray-600 hover:text-blue-600">Email Us</a>
         </div>
       </div>

       {/* Copyright Section */}
       <div className="text-center pt-8 border-t border-gray-200">
         <p className="text-sm text-gray-600">
           &copy; {new Date().getFullYear()}{' '}
           <a 
             href="https://www.yourwebsite.com" 
             className="text-gray-800 hover:text-blue-600" 
             target="_blank" 
             rel="noopener noreferrer"
           >
             Created by Manuel
           </a>
         </p>
       </div>
     </div>
   </footer>
 );
};

export default Footer;