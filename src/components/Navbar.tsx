import { useEffect, useRef, useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { IoMdPartlySunny } from "react-icons/io";

import { useTheme } from "@/hooks/theme-context";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleTheme = () => {
        toggleTheme()
    }

    const handleMenuOpen = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const handleMenuClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 600);
    };

    // handle About Nav 
    const handleAboutEnter = () => {
        document.body.classList.add('logo-hover-about');
    };
    const handleAboutLeave = () => {
        document.body.classList.remove('logo-hover-about');
    };

    // handle Craft Nav 
    const handleCraftEnter = () => {
        document.body.classList.add('logo-hover-craft');
    };
    const handleCraftLeave = () => {
        document.body.classList.remove('logo-hover-craft');
    };

    // handle Connect us Nav 
    const handleConnectEnter = () => {
        document.body.classList.add('logo-hover-connect-nav');
    };
    const handleConnectLeave = () => {
        document.body.classList.remove('logo-hover-connect-nav');
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {

            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                handleMenuClose();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);



    return (
        <nav className="nav content-container" role="navigation" aria-label="Main navigation">

            {/* Logo */}
            <a href="/">
                <div className="logo" role="Logo" aria-label="Main logo">
                    <h1 className="font-outfit logo-text-one">Creative<span className="font-paytone logo-text-two">BUG'S</span></h1>
                </div>
            </a>

            {/* Main Navigation */}
            <div className="nav-menu" role="navigation" aria-label="Main navigation">
                <ul className="nav-menu-list">
                    <li
                        onMouseEnter={handleAboutEnter}
                        onMouseLeave={handleAboutLeave}
                        onFocus={handleAboutEnter}
                        onBlur={handleAboutEnter}
                        aria-label="About us"
                    >
                        <Link
                            to={"/about"}
                            aria-current={location.pathname === "/about" ? "page" : undefined}
                            aria-label="About Us"
                        >
                            About Us.
                            {location.pathname === "/about" && <span className="sr-only"> (current page)</span>}
                        </Link>
                    </li>

                    <li
                        onMouseEnter={handleCraftEnter}
                        onMouseLeave={handleCraftLeave}
                        onFocus={handleCraftEnter}
                        onBlur={handleCraftEnter}

                    >
                        <Link
                            to={"/work"}
                            aria-current={location.pathname === "/work" ? "page" : undefined}
                            aria-label="Creaft and Expertises"
                        >
                            Craft and Expertises.
                            {location.pathname === "/work" && <span className="sr-only"> (current page)</span>}
                        </Link>
                    </li>

                    <li
                        onMouseEnter={handleConnectEnter}
                        onMouseLeave={handleConnectLeave}
                        onFocus={handleConnectEnter}
                        onBlur={handleConnectEnter}
                        aria-label="Connect"
                    >
                        <Link
                            to={"/connect"}
                            aria-current={location.pathname === "/connect" ? "page" : undefined}
                            aria-label="Connect with Us"
                        >
                            Connect with Us.
                            {location.pathname === "/connect" && <span className="sr-only"> (current page)</span>}
                        </Link>
                    </li>

                    <li>

                        <button
                            onClick={handleTheme}
                            className="theme"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        >
                            {theme ? (theme === "dark" ? <IoMdPartlySunny /> : <IoMoonSharp />) : ""}
                            <span className="sr-only">
                                {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            </span>
                        </button>

                    </li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="mobile-nav-container">
                <div className="mobile-nav-handlers">
                    <button
                        onClick={handleTheme}
                        className="theme"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        aria-pressed={theme === 'dark' ? 'true' : 'false'}
                    >
                        {theme ? (theme === "dark" ? <IoMdPartlySunny /> : <IoMoonSharp />) : ""}
                        <span className="visually-hidden">{theme === 'dark' ? 'Light' : 'Dark'} theme</span>
                    </button>

                    <button
                        className="menu-icon"
                        onClick={handleMenuOpen}
                        aria-label="Open mobile navigation menu"
                        aria-controls="mobile-navigation-menu"
                    >
                        <IoMenu />
                        <span className="visually-hidden">Menu</span>
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        ref={menuRef}
                        className={`mobile-nav ${isClosing ? "menu-close-animaton" : ""}`}
                        id="Mobile Navigation Menu"
                        role="navigation"
                        aria-label="Main Navigation"
                    >

                        <div className="mobile-nav-grid" aria-hidden="true">

                            <div className="mobile-nav-grid-one" aria-hidden="true"></div>
                            <div className="mobile-nav-grid-two">
                                <a href="/">
                                    <h1 className="font-paytone">BUG'S</h1>
                                </a>
                                <button
                                    className="menu-close"
                                    onClick={handleMenuClose}
                                    aria-label="Close mobile menu">
                                    <IoMdClose />
                                    <span className="visually-hidden">Close menu</span>
                                </button>
                            </div>

                            <div className="mobile-nav-grid-three">
                                <Link
                                    to={"/about"}
                                    aria-current={location.pathname === "/about" ? "page" : undefined}
                                    onClick={handleMenuClose}
                                >
                                    About us
                                </Link>
                            </div>

                            <div className="mobile-nav-grid-four">
                                <Link
                                    to={"/connect"}
                                    aria-current={location.pathname === "/connect" ? "page" : undefined}
                                    onClick={handleMenuClose}
                                >
                                    Connect with us
                                </Link>
                            </div>

                            <div className="mobile-nav-grid-five">
                                <Link
                                    to={"/work"}
                                    aria-current={location.pathname === "/craft" ? "page" : undefined}
                                    onClick={handleMenuClose}
                                >
                                    Craft and Expertises
                                </Link>
                            </div>




                        </div>
                    </div>)}

            </div>
        </nav>
    )
}

export default Navbar