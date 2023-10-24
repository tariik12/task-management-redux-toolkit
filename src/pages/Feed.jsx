import { useForm } from "react-hook-form";
import PostCard from "../components/posts/PostCard";
import { useGetPostsQuery, useSetPostMutation } from "../redux/featurse/api/baseApi";


const Feed = () => {
    const {data:posts,isLoading, isError} = useGetPostsQuery();
const {register,handleSubmit} = useForm();
const [ setPost, {data:postData}] = useSetPostMutation();
console.log(postData)
    if(isLoading){
        return<p className="text-9xl">Loading .....</p>
    }
    if(!isLoading && isError){
        return<p className="text-9xl">Something is wrong</p>  
    }

    const onSubmit =(data) =>{
setPost(data)
    }
    return (
        <div>
          <h1>Feed</h1>
          <form onSubmit={handleSubmit(onSubmit)}className="flex mx-10">
      <input
      className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
         {...register("post")}
          />
          <button
          type="submit"
          className="bg-zinc-500 text-zinc-300 text-lg p-3 border border-zinc-300 rounded-md"
          >
            Post
          </button>
  
    </form>
          <div>
          {
            posts?.map((post) =><PostCard key={post.id} post={post}></PostCard>)
          }
          </div>
        </div> 
    );
};

export default Feed;