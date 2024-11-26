import './style.css';
import { Link } from 'react-router';
function Header(){
    return(
        <nav className="bg-violet-400 flex items-center justify-between text-2xl p-1 text-white">

        <div className="appName tracking-wide font-semibold">ShelfMaster</div>

        <div className="nav-links flex items-center">

          <ul className="navbar p-2 m-0 flex gap-3 text-xl items-center">

            <li>
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/browse-book" class="nav-link">
                Browse Books
              </Link>
            </li>

            <li>
            <button className='bg-yellow-400 px-2 py-1 rounded-lg text-gray-600'>Add+ Book</button>
            </li>
            
          </ul>
        </div>
        
        
      </nav>
    )
}

export default Header;

