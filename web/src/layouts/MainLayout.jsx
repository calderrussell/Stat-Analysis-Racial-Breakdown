import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} Calder Russell. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
