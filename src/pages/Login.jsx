import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
export default function Login() {
    return (
        <div className="flex flex-col items-center mt-10 bg-raisin-black min-h-screen">
            <Link to="/" className="w-32 h-32 shadow-lg shadow-forest-green bg-raisin-black rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} size="3x" className="text-white" />
            </Link>
            <form className="mt-10 w-full max-w-md flex flex-col items-center justify-center">
                <div className="mb-6">
                    <label htmlFor="email" className="block text-white font-title">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-64 h-12 px-4 mt-2 text-xl font-body text-gray-800 bg-white rounded focus:outline-none"
                        placeholder="email@example.com"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-white font-title">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-64 h-12 px-4 mt-2 text-xl font-body text-gray-800 bg-white rounded focus:outline-none"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-32 h-12 bg-white text-raisin-black font-bold font-body rounded outline"
                >
                    Login
                </button>
                <div className="text-center w-64 mt-4">
                    <a href="/register" className="text-white font-body underline">
                        You doesn't have an account ? you can sign up here
                    </a>
                </div>
            </form>
        </div>
    );
}