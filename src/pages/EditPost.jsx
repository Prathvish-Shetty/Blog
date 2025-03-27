
import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!slug) {
            navigate("/");
            return;
        }

        appwriteService
            .getPost(slug)
            .then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/"); // Redirect if post is not found
                }
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
                navigate("/");
            })
            .finally(() => setLoading(false));
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className="py-8 text-center text-gray-500">
                <p>Loading...</p>
            </div>
        );
    }

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
