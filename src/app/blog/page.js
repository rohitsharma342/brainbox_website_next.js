"use client"; // Required for client-side fetching in Next.js

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const siteURL = "balwadaanil0783.wordpress.com"; // Your WordPress site

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteURL}/posts/`);
                const data = await response.json();
                console.log("Fetched Blogs:", data);
                if (data.posts) {
                    setBlogs(data.posts);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    // Function to create a URL-friendly slug from a title
    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "") // Remove special characters
            .replace(/\s+/g, "-"); // Replace spaces with dashes
    };

    // Extract first image from blog content
    const extractFirstImage = (content) => {
        const match = content.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : "https://via.placeholder.com/300"; // ✅ Better placeholder image
    };

    // Function to trim text to a certain length
    const truncateText = (text, limit) => {
        const strippedText = text.replace(/<[^>]*>/g, ""); // Remove HTML tags
        return strippedText.length > limit ? strippedText.substring(0, limit) + "..." : strippedText;
    };

    return (
        <div className="container w-[80%] mt-20 mx-auto px-4 py-10 text-center">
            {/* Title & Subtitle */}
            <div className="text-center flex flex-col items-center">
                <h1 className="text-5xl font-bold text-gray-900">Our Latest Blogs</h1>
                <p className="text-gray-600 w-[80%] text-lg mt-2">
                    Explore our blog for tips, tutorials, and updates on using free AI tools available on our web app.
                    Boost your productivity and creativity with cutting-edge AI.
                </p>
            </div>

            {/* Featured Blog Section - Shows Latest Blog */}
            {blogs.length > 0 && (
                <Link
                    href={`/blog/${generateSlug(blogs[0].title)}`} 
                    className="mt-10 flex flex-col md:flex-row text-start bg-purple-200 rounded-xl hover:shadow-xl cursor-pointer transition duration-300"
                >
                    <img
                        src={extractFirstImage(blogs[0].content)}
                        className="w-full md:w-[550px] h-[280px] object-cover rounded-l-xl"
                        alt={blogs[0].title}
                    />
                    <div className="ml-5 p-10 space-y-5">
                        <h1 className="text-2xl font-bold">{blogs[0].title}</h1>
                        <p className="text-gray-600">{truncateText(blogs[0].excerpt, 210)}</p> {/* Shorter text */}
                        <p className="mt-10 text-gray-600 font-medium">
                            {new Date(blogs[0].date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </Link>
            )}

            {/* Blog Cards Grid - Remaining Blogs */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.slice(1).map((blog) => (
                   <Link href={`/blog/${generateSlug(blog.title)}`} key={blog.ID} legacyBehavior>

                        <a className="block bg-white shadow-lg rounded-xl pb-10 overflow-hidden hover:shadow-xl cursor-pointer transition duration-300">
                            <div className="overflow-hidden rounded-3xl">
                                <img
                                    src={extractFirstImage(blog.content)}
                                    className="w-full h-[200px] object-cover rounded-3xl p-4 transition-transform duration-300 ease-in-out hover:scale-105"
                                    alt={blog.title}
                                />
                            </div>
                            <div className="p-5 space-y-3">
                                <p className="text-gray-500 text-sm text-right">
                                    {new Date(blog.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                                <h2 className="text-lg font-bold text-start hover:underline">{blog.title}</h2>
                                <p className="text-gray-500 text-start">{truncateText(blog.excerpt, 200)}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
