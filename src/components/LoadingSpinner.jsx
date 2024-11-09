import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  // SELECTING THE 'LOADING' STATE FROM THE REDUX STORE
  const loading = useSelector((state) => state.news.loading);

  return (
    // RENDERING THE SPINNER ONLY IF 'LOADING' STATE IS TRUE
    loading && (
      <div className="spinner-overlay">
        <ClipLoader color="#36d7b7" loading={loading} size={50} />
      </div>
    )
  );
};

export default LoadingSpinner;
