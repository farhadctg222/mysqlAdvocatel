
import Link from 'next/link';
import './Header.css'

const Header = () => {
    return (
        <div>
           <div>
        
           </div>
           <nav>
            <ul>
                <Link href="/" style={{textDecoration:'none',}}><li>ITP</li></Link>
               <Link href="/" style={{textDecoration:'none'}}> <li>Lawyer</li></Link>
            </ul>
           </nav>
          <div className="flex items-center justify-center bg-white ">
  <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-lg border">

    {/* Search Input */}
    <input
      type="text"
      placeholder="🔍 এখানে সার্চ করুন..."
      className="px-4 py-2 w-64 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    {/* Search Button */}
    <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
      Search
    </button>

  </div>
</div>

          
        </div>
    );
};

export default Header;