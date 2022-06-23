import styles from "../styles/Navbar.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";

const navigation = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "Posts", path: "/posts"},
    {id: 3, title: "Contacts", path: "/contancts"},
]

const Navbar = () => {
    const [contacts, setContacts] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = response.json();
            setContacts(data);
        }
        fetchData();
    }, [])

    return (
        <div className={styles.container}>
            <div>
                WebDev
            </div>
            <ul className={styles.menu}>
                {navigation.map(({id, title, path}) => (
                    <li><Link key={id} href={path}><a>{title}</a></Link></li>
                ))}  
             
            </ul>
        </div>
    )
}

export default Navbar;