import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer.jsx";

import styles from './Layout.module.scss'
const Layout = () => {


    return (
        <div className={styles['layout']}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout