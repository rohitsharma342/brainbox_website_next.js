"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

export default function BlogDetail() {
    const params = useParams();
    console.log("Params from URL:", params);

    const { id: slug } = params || {};
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [headings, setHeadings] = useState([]);
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

    useEffect(() => {
        if (!blog?.content) return;

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = blog.content;

        const extractedHeadings = Array.from(tempDiv.querySelectorAll("h2, h3")).map((heading, index) => {
            const id = `heading-${index}`;
            heading.setAttribute("id", id); // Set ID directly in the DOM
            return { id, text: heading.textContent, level: heading.tagName };
        });

        setHeadings(extractedHeadings);
        setBlog((prev) => (prev ? { ...prev, content: tempDiv.innerHTML } : prev));
    }, [blog?.content]); // Only trigger when `blog.content` changes

    const handleScrollToHeading = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const navbarHeight = 80; 
            const offset = 20; 
    
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight - offset,
                behavior: "smooth",
            });
        }
    };
    

    return (
        <div className="flex justify-center mt-32 px-5">
            {/* Left Sticky Sidebar */}
            <div className="w-1/4 mt-32 sticky top-20 h-screen overflow-auto p-5">
                <div className="p-4">
                    <h2 className="text-md flex">
                        <RxHamburgerMenu className="mt-1 mr-2" /> On this page
                    </h2>
                    <div className="flex gap-3">
                        <div className="border mt-3 border-gray-300 h-auto"></div>
                        <ul className="mt-3 space-y-0 text-sm text-gray-600">
                            {headings.map((heading) => (
                                <li key={heading.id} className={`pl-${heading.level === "H3" ? "4" : "0"}`}>
                                    <button
                                        onClick={() => handleScrollToHeading(heading.id)}
                                        className="hover:text-blue-600 transition-all duration-200 text-left"
                                    >
                                        {heading.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Center Content (Scrollable) */}
            <div className="w-1/2 overflow-auto p-5">
                {loading ? (
                    <p className="text-lg text-gray-500 text-center">Loading...</p>
                ) : blog ? (
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-5xl font-bold text-gray-900">{blog.title}</h1>
                        <div className="flex mt-5 items-center">
                            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-full h-10 w-10 mr-2" alt="Author" />
                            <div className="flex mt-3 space-x-5">
                                <p>By Anil Choudhary</p>
                                <p className="text-gray-500">
                                    {new Date(blog.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 text-xl leading-7 text-left mb-40" dangerouslySetInnerHTML={{ __html: blog.content }} />
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
                    <button className="border border-black rounded-lg px-4 py-2 mt-4 font-semibold">Get Started!</button>
                </div>
                <div className="bg-[#E1E3FF] p-6 mt-5 rounded-2xl shadow-lg text-center">
                    <h2 className="text-xl font-bold text-gray-900">Elevate Your Social Media Game</h2>
                    <p className="text-gray-700 mt-2">
                        Lunroo's cutting-edge AI tools help you automate routine tasks, maximize productivity,
                        and drive engagement like never before.
                    </p>
                    <button className="border border-black rounded-lg px-4 py-2 mt-4 font-semibold">Get Started!</button>
                </div>
            </div>
        </div>
    );
}
