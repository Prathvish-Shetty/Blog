import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents);
            }
        }).catch((error) => {
            console.error("Error fetching posts:", error);
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Container>
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No posts available.</p>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
