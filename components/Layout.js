import Header from './Header';
import Footer from './Footer';
import styles from '../styles/global.module.scss';

const Layout = ({ children }) => {
    return (
        <>
        <Header/>
            <div className={styles.container}>
            {children}
            </div>
        <Footer/>
    </>
    )
}

export default Layout;