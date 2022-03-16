import UserAvatar from "./UserAvatar";

export default function PostCard({ post }) {
    return (
        <article>
            <UserAvatar uid={post.uid} />
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    );
}
