export const Sidebar = () => {
    return (
        <div className="sidebar open h-full">
            <div className="toggle">
                T
            </div>

            <div className="logo">
                LOGO
            </div>

            <nav>

                <div className="nav-title">
                    Management
                </div>

                <ul>
                    <li className="nav-item active">
                        <i className="bx bxs-dashboard"></i>
                        <span>Dashboard</span>
                    </li>
                    <li className="nav-item">
                        1
                        <span>Analytics</span>
                    </li>
                    <li className="nav-item">
                        2
                        <span>Wallet</span>
                    </li>
                    <li className="nav-item">
                        3
                        <span>Notifications</span>
                    </li>
                    <li className="nav-item">
                        4
                        <span>Settings</span>
                    </li>
                </ul>

                <hr />

                    <div className="nav-title">
                        Supports
                    </div>

                    <ul>
                        <li className="nav-item">
                            1
                            <span>Get Help</span>
                        </li>
                        <li className="nav-item">
                            2
                            <span>Send Feedback</span>
                        </li>
                    </ul>

            </nav>

        </div>
    )
}