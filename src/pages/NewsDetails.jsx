import DefaultLayout from "../layouts/DefaultLayout";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WeatherModal from "../components/WeatherModal";

function NewsDetails() {
  const { id } = useParams();
  const article = useSelector((state) => state.news.articles[id]);

  if (!article) {
    return <p>Article not found.</p>;
  }
  return (
    <DefaultLayout>
      <div className="container">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className=" text-2xl md:text-4xl font-bold mb-4">{article.title}</h1>

        <p className="text-gray-500 mb-4 text-sm">{article.description}</p>
        <p className="text-gray-500 mb-4">
          {new Date(article.publishedAt).toLocaleString()}
        </p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
          <div className="relative w-full sm:w-full md:w-1/2 h-64 sm:h-64 md:h-80 overflow-hidden rounded mb-4">
            {/* NEWS IMAGE  */}
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="sm:w-full md:w-1/2">
            {/* NEWS CONTENT */}
            <p className=" text-sm md:text-lg leading-relaxed mb-4">
              {article.content ? (
                <>
                  {article.content.includes("[") ? (
                    <>
                      {article.content.split("[")[0]}...{" "}
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Read full article
                      </a>
                    </>
                  ) : (
                    article.content
                  )}
                </>
              ) : (
                "Full content not available."
              )}
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-sm">Source: {article.source.name}</p>
      </div>
      <WeatherModal />
    </DefaultLayout>
  );
}

export default NewsDetails;
