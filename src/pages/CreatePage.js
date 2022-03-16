import { addDoc, serverTimestamp } from "@firebase/firestore";
import { useState } from "react";
import { postsRef } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import imgPlaceholder from "../assets/img/img-placeholder.jpg";

export default function CreatePage() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState(imgPlaceholder);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const newPost = {
            title: title,
            body: body,
            image: image,
            uid: "WKjy6B8IfDJxIsBbyxEe",
            createdAt: serverTimestamp()
        };

        await addDoc(postsRef, newPost);
        navigate("/");
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file.size < 500000) {
            const reader = new FileReader();
            reader.onload = event => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            console.log("The image file is too big!");
        }
    }

    return (
        <section className="page">
            <h1>Create Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} />
                </label>
                <label>
                    Body
                    <input type="text" value={body} placeholder="Type a body text" onChange={e => setBody(e.target.value)} />
                </label>
                <label>
                    Image
                    <input type="file" className="file-input" accept="image/*" onChange={handleImageChange} />
                    <img className="image-preview" src={image} alt="Choose" />
                </label>
                <button type="submit">Save</button>
            </form>
        </section>
    );
}
