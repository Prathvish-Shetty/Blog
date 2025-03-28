
import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title || "Post Image"}
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-900 h-20">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
