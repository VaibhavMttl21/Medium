import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 pt-200 w-full max-w-screen-xl pt-32">
                <div className="col-span-8">
                    <div className=" text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        post on 2nd Dec 2023
                    </div>
                    <div className="  text-xl font-extrabold pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-500 text-lg">
                    Author
                    </div>
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                        <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        
                        <div>
                            <div className="text-2xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>

                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
}