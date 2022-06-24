import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const navigation = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "Posts", path: "/posts"},
    {id: 3, title: "Contacts", path: "/contacts"},
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                WebDev
            </div>
            <ul className={styles.menu}>
                {navigation.map(({id, title, path}) => (
                    <li key={id}><Link href={path}><a>{title}</a></Link></li>
                ))}  
             
            </ul>
        </div>
    )
}

export default Navbar;