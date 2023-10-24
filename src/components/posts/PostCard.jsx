


const PostCard = ({post}) => {
    console.log(post)
    return (
        <div className="bg-slate-800 my-5 text-white p-4 rounded-2xl w-10/12 mx-auto"> 
            <h1 className="text-xl p-2">{post.title}</h1>
            <p className="">{post.body}</p>
        </div>
    );
};

export default PostCard;