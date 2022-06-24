import Heading from "./Heading";

const ContactInfo = ({contacts}) => {
    const {name, email, address} = contacts || {};
    const {street, suite, city, zipcode} = address || {};

    if (!contacts) {
        return (<h1>Empty contact</h1>)
    }

    return (
        <>
            <Heading tag="h3" text={name}/>
            <div>
                <strong>Email:</strong>
                {email}
            </div>
            <div>
                <strong>Address:</strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo;