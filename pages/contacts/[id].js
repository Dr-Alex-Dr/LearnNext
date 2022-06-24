import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

const Names = ({contacts}) => {
    return (
        <>
            <ContactInfo contacts={contacts}/>
        </>
    )
}

export default Names;