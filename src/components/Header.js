const Header = (props) => {
    return (<>
        <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8 bg-slate-200">
            <header className="py-6 mx-10">
                <nav className="flex flex-row justify-between items-center">
                    <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
                        CoffeeStyle.
                    </div>
                    <ul id="ct-top-menu"
                        className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium">
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="">Home</a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="">Our Products</a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="">Blog</a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="">About</a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="">Contact</a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="">StyleGuide</a>
                        </li>
                    </ul>
                    <ul
                        className="basis-3/6 justify-end lg:justify-start items-center flex ml-16 uppercase text-sm text-gray-500 font-medium">
                        <li className="ct-top-menu-item">
                            <a href="a.com" className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="tqd-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                <span className="mx-2">Cart</span>
                                <span className="tqd-badge-circle bg-orange-400 text-white">10</span>

                            </a>
                        </li>
                    </ul>

                    <div className="lg:hidden basis-1/6 flex items-center cursor-pointer px-2 sm:px-4 ">
                        <svg id="ct-toggle-top-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tqd-icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>
                </nav>
            </header>
        </div>
    </>)
}

export default Header;