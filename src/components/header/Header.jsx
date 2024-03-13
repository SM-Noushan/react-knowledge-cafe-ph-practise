import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className="navbar px-0 py-6">
            <div className="navbar-start">
                <a className="hover:cursor-pointer text-4xl font-bold">KnC</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            <img alt="profile-img" src={profile} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm lg:menu-lg dropdown-content bg-base-300 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;