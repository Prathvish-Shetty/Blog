
import React from "react";
import { Button } from "../components";
import { Link } from "react-router-dom";
import home from '../assets/home.jpeg'
import { useSelector } from "react-redux";

function Home() {
    const authStatus = useSelector((state) => state.auth.status)
    return (
        <div
            className="w-full min-h-screen flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${home})` }} // Set the background image
        >
            <div className="w-full py-16 min-h-screen flex items-center">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Welcome to Our Blog Platform
                    </h1>
                    <p className="text-xl text-gray-800 mb-6">
                        Share your thoughts, read amazing stories, and connect with
                        like-minded people. Sign up and start your journey today!
                    </p>
                    {!authStatus && <div className="flex justify-center space-x-4">
                        <Link to="/signup">
                            <Button>Get Started</Button>
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Home;
