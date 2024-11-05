import {useEffect, useState} from "react";
import anup from "../assets/anup.jpg"

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);



    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold dark:text-white">Anup Kumar</h1>
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleDarkMode}
                    className="hover:accent-gray-700 dark:bg-white bg-black dark:text-black text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-10 px-4 py-2">
                    {!isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="h-4 w-4">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-sun h-4 w-4">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                    )}
                </button>
                <img src={anup} alt="Profile Picture" className="rounded-3xl h-10 w-10"/>
            </div>
        </header>
    );
};

export default Header;
