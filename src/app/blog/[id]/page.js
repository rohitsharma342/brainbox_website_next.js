"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetail() {
    const params = useParams();
    console.log("Params from URL:", params);

   

    const { id: slug } = params || {};
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const siteURL = "balwadaanil0783.wordpress.com";

    useEffect(() => {
        if (!slug) return;

        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/${siteURL}/posts/slug:${slug}`);
                const data = await response.json();
                console.log("Fetched Blog:", data);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    return (
        <div className="flex  justify-center mt-32 px-5">
            {/* Left Sticky Sidebar */}
            <div className="w-1/4  sticky top-0 h-screen overflow-auto p-5">
                {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">On this page</h2>
                    <ul className="mt-2 text-blue-600">
                        <li>What Is a Link in Bio?</li>
                        <li>What is Linktree?</li>
                        <li>How to Choose the Right Tool</li>
                        <li>1. Pallyy</li>
                        <li>2. Later Link in Bio</li>
                        <li>3. Lnk.Bio</li>
                        <li>4. Campsite</li>
                        <li>5. Milkshake</li>
                        <li>6. Shorby</li>
                        <li>7. Bio.site</li>
                        <li>8. Hoo.be</li>
                    </ul>
                </div> */}
            </div>

            {/* Center Content (Scrollable) */}
            <div className="w-1/2 overflow-auto  p-5">
                {loading ? (
                    <p className="text-lg text-gray-500 text-center">Loading...</p>
                ) : blog ? (
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-5xl font-bold text-gray-900">{blog.title}</h1>
                        <div className="flex mt-5 items-center">
                            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='rounded-full h-10 w-10 mr-2' alt='Author' />
                            <div className='flex mt-3 space-x-5'>
                                <p>By Anil Choudhary</p>
                                <p className='text-gray-500'>{new Date(blog.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}</p>
                            </div>
                        </div>
                        {blog.featured_image && (
                            <img src={blog.featured_image} className='mt-5 rounded-lg object-cover w-full max-w-3xl' alt={blog.title} />
                        )}
                        <div
                            className="mt-5 text-lg leading-relaxed text-left mb-40"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                ) : (
                    <p className="text-lg text-red-500 text-center">Blog not found.</p>
                )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="w-1/4 h-screen mt-32 sticky top-20 overflow-auto p-5">
                <div className="bg-[#E1E3FF] p-6 rounded-2xl shadow-lg text-center">
                    <h2 className="text-xl font-bold text-gray-900">Elevate Your Social Media Game</h2>
                    <p className="text-gray-700 mt-2">
                        Lunroo's cutting-edge AI tools help you automate routine tasks, maximize productivity, 
                        and drive engagement like never before.
                    </p>
                    <button className="border border-black rounded-lg px-4 py-2 mt-4 font-semibold">
                        Get Started!
                    </button>
                </div>
                <div className="bg-[#E1E3FF] p-6 mt-5 rounded-2xl shadow-lg text-center">
                    <h2 className="text-xl font-bold text-gray-900">Elevate Your Social Media Game</h2>
                    <p className="text-gray-700 mt-2">
                        Lunroo's cutting-edge AI tools help you automate routine tasks, maximize productivity, 
                        and drive engagement like never before.
                    </p>
                    <button className="border border-black rounded-lg px-4 py-2 mt-4 font-semibold">
                        Get Started!
                    </button>
                </div>
            </div>
        </div>
    );
}
