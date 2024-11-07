import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners"; 

const LoadingSpinner = () => {
  const loading = useSelector((state) => state.news.loading); 

  return (
    loading && (
      <div className="spinner-overlay">
        <ClipLoader color="#36d7b7" loading={loading} size={50} />
      </div>
    )
  );
};

export default LoadingSpinner;
