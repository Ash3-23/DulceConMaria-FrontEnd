import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
const HeaderLayout = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);

export default HeaderLayout;