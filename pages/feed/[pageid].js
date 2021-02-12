import {useRouter} from 'next/router';
import { Toolbar } from "../../components/toolbar";


export const Feed = ({pageNumber, articles}) => {
    const router = useRouter();

  return (
    <>
      <div className="flex grid grid-rows-10">
        <Toolbar></Toolbar>
        <div className="flex flex-wrap justify-items-center">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center mx-5 my-3"
            >
              <h1
                className="font-bold text-2xl font-new"
                onClick={() => (window.location.href = article.url)}
              >
                {article.title}
              </h1>
              <p className="mt-1">{article.description}</p>
              {!!article.urlToImage && (
                <img className="w-auto mt-1" src={article.urlToImage} />
              )}
              <button
                onClick={() => (window.location.href = article.url)}
                className="mt-2 p-2 text-gray-100 hover:bg-red-600 rounded-lg bg-red-500"
              >
                Read more ...
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center text-white m-2 mb-5">
          <div
            className={
              pageNumber === 1
                ? "hidden"
                : "flex flex-wrap p-2 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-500"
            }
            onClick={() => {
              if (pageNumber > 1) {
                router
                  .push(`/feed/${pageNumber - 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            <svg
              class="mt-1 mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              ></path>
            </svg>{" "}
            Previous
          </div>
          <div className="p-2 font-bold text-xl text-blue-500 mx-3">
            #{pageNumber}
          </div>
          <div
            className={
              pageNumber === 5
                ? "hidden"
                : "flex flex-wrap p-2 px-4 rounded-md bg-blue-400 cursor-pointer hover:bg-blue-500"
            }
            onClick={() => {
              if (pageNumber < 5) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next{" "}
            <svg
              class="mt-1 ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageid;

    if(!pageNumber || pageNumber <1 ||pageNumber >5){
        return {
            props:{
                articles:[],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers:{
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            }
        },
    );

    const apiJson = await apiResponse.json();
    const {articles } = apiJson;

    return{
        props:{
            articles,
            pageNumber:Number.parseInt(pageNumber)
        }
    }
};
export default Feed;