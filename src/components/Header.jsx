import { Link } from 'react-router-dom';
import { FaRobot } from "react-icons/fa";


const Header = () => {
    return (
        <div className="min-h-screen flex flex-col  ">
            {/* Top Navigation */}
            <header className="h-14 flex items-center justify-between px-8 bg-white shadow-md text-gray-800">
                <Link to="/" className="text-lg font-semibold tracking-wide hover:text-blue-600 transition-colors">
                    Fin ai
                </Link>
                <Link
                    to="/inbox"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors tracking-wide "
                >
                    Go to Inbox
                </Link>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex justify-center items-center px-4">
                <div className='flex justify-center items-center flex-col' >
                    <p><FaRobot size={40} /></p>
                    <h1 className="text-xl md:text-5xl font-bold text-black drop-shadow-lg transform   cursor-pointer flex justify-center items-center ">
                        Hi im Fin ai copilot
                    </h1>
                </div>
            </main>
        </div>
    );
};

export default Header;
