import PropTypes from "prop-types";

const NewsCard = ({ article }) => {
  return (
    <div className="p-4 gap-5 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row md:flex-row w-full md:w-full lg:w-full">
      <div className="w-full sm:w-1/2 md:w-48 h-48 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h3
          className="text-xl font-semibold overflow-hidden text-ellipsis max-h-12"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.4rem",
          }}
        >
          {article.title}
        </h3>
        <p
          className="text-sm text-gray-600 mt-2 overflow-hidden text-ellipsis max-h-20 leading-tight"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.25rem",
          }}
        >
          {article.description}
        </p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
