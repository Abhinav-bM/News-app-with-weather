import DefaultLayout from "../layouts/DefaultLayout";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NewsDetails() {
  const { id } = useParams();
  const article = useSelector((state) => state.news.articles[id]);

  if (!article) {
    return <p>Article not found.</p>;
  }
  return (
    <DefaultLayout>
      <div className="container mx-auto p-4">
        <Link to="/" className="text-blue-500 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-4">
          {new Date(article.publishedAt).toLocaleString()}
        </p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto rounded mb-4"
        />
        <p className="text-lg leading-relaxed mb-4">{article.content}</p>
        <p className="text-gray-700 text-sm">Source: {article.source.name}</p>
      </div>
    </DefaultLayout>
  );
}

export default NewsDetails;
