const Header = () => {
    return (
        <header className="site-header">
            <div className="header-inner">
                <h1 className="site-title">My WordPress Theme</h1>
                <nav className="site-navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
