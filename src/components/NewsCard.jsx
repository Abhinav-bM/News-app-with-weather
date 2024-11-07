import PropTypes from "prop-types";

const NewsCard = ({ article }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover rounded-lg md:w-48 md:h-32 md:mr-4"
      />
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-semibold">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{article.description}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.node.isRequired,
};

export default NewsCard;
