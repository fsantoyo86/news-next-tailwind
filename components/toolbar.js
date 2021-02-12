import {useRouter} from 'next/router';


export const Toolbar =()=>{
    const router = useRouter();

    return (
      <div className="flex flex-wrap p-3 justify-center text-lg ">
        <div
          className="mx-4 cursor-pointer hover:text-gray-400"
          onClick={() => router.push("/")}
        >
          Home
        </div>
        <div
          className="mx-4 cursor-pointer hover:text-gray-400"
          onClick={() => router.push("/feed/1")}
        >
          News
        </div>
        <div
          className="mx-4 cursor-pointer hover:text-gray-400"
          onClick={() => router.push("/eom")}
        >
          About Us
        </div>
        <div
          className="mx-4 cursor-pointer hover:text-gray-400"
          onClick={() => (window.location.href = "https://twitter.com")}
        >
          Twitter
        </div>
        <div
          className="mx-4 cursor-pointer hover:text-gray-400"
          onClick={() => (window.location.href = "https://facebook.com")}
        >
          Facebook
        </div>
      </div>
    );
};