import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
 // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [comments, setComments] = useState<string[]>([])
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => { 
    e.preventDefault()
    setComments(oldComments => [...oldComments, comment])
  }
  const CommentSection = () => {
    return (
      comments.map(comment => <p key={comment}>{comment}</p>)
    )
  }
  console.log(comments)
  
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <CommentSection />
        <form className="flex gap-4" onSubmit={handleSubmit}>
          
          <textarea value={comment} onChange={e => setComment(e.target.value)}  placeholder="Add a comment.."/>
          <button type="submit" >Comment</button>
        </form>
      </main>
    </>
  );
};

export default Home;