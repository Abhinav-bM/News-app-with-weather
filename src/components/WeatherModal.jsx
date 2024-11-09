import { useDispatch, useSelector } from "react-redux";
import { toggleWeatherModal } from "../redux/slices/newsSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const WeatherModal = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.news.weather);
  // const { dt, timezone } = weather
  //   const localTime = new Date((dt + timezone) * 1000).toLocaleTimeString("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  const weatherModalOpen = useSelector((state) => state.news.weatherModalOpen);

  if (!weatherModalOpen || !weather) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
      {/* <div className="bg-white p-6 rounded-md w-80 space-y-4 text-center">
        <h2 className="text-xl font-bold">{weather.name} Weather Details</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Feels Like: {weather.main.feels_like}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Condition: {weather.weather[0].description}</p>
        <button
          onClick={() => dispatch(toggleWeatherModal())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div> */}
      <section className="vh-100 w-1/3 rounded-lg" style={{ backgroundColor: "#4B515D" }} >
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="8" lg="6" xl="4">
              <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
                <MDBCardBody className="p-4">
                  <div className=" d-flex">
                    <MDBTypography tag="h6" className="flex-grow text-white">
                      {weather.name}
                    </MDBTypography>
                    <MDBTypography className="text-white" tag="h6">time</MDBTypography>
                  </div>

                  <div className="d-flex flex-column text-center mt-5 mb-4">
                    <MDBTypography
                      tag="h6"
                      className="display-4 mb-0 font-weight-bold text-white"
                      
                    >
                      {" "}
                      {weather.main.temp}{" "}°C
                    </MDBTypography>
                    <span className="small text-white">
                      {weather.weather[0].main}
                    </span>
                  </div>

                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                      <div>
                        <MDBIcon
                          fas
                          icon="wind fa-fw"
                          style={{ color: "#868B94" }}
                        />{" "}
                        <span className="ms-1"> 40 km/h</span>
                      </div>
                      <div>
                        <MDBIcon
                          fas
                          icon="tint fa-fw"
                          style={{ color: "#868B94" }}
                        />{" "}
                        <span className="ms-1"> 84% </span>
                      </div>
                      <div>
                        <MDBIcon
                          fas
                          icon="sun fa-fw"
                          style={{ color: "#868B94" }}
                        />{" "}
                        <span className="ms-1"> 0.2h </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                        width="100px"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(toggleWeatherModal())}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Close
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default WeatherModal;
