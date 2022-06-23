import styles from "../../styles/Posts.module.scss";

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
                    <li key={id}><strong>{name}</strong> ({email})</li>
                ))}
            </ul>
        </div>
    )
}
export default Contacts;