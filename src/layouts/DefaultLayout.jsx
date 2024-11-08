import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="px-8 sm:px-10 md:px-10 lg:px-20 xl:px-48 2xl:px-48 flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
