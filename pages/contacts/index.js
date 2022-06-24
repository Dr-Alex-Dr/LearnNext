import styles from "../../styles/Posts.module.scss";
import Link from "next/dist/client/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contacts: data}
    }
};

const Contacts = ({contacts}) => {
    

    return (
        <div className={styles.container}>
            <ul>
                {contacts && contacts.map( ({id, name, email}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Contacts;