import { useEffect } from "react";

export default function UpdatePage({ showLoader }) {
    useEffect(() => {
        showLoader(false);
    }, [showLoader]);

    return (
        <section className="page">
            <h1>Update Page</h1>
        </section>
    );
}
