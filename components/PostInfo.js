import Heading from "./Heading";

const PostInfo = ({post}) => {
    console.log(post);
    const {title, body} = post || {};

    if (!post) {
        return (<h1>Empty post</h1>)
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <div>
                <strong>body:</strong>
                {body}
            </div>
           
        </>
    )
}

export default PostInfo;