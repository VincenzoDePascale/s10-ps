import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);
  const meteoData = useSelector((state) => state.meteoData);
  const lat = useSelector((state) => state.lat);
  const lon = useSelector((state) => state.lon);
  console.log("selector", place);

  const api = "a58608a54647062d097718fd7013334b";
  const baseLinkFetch = `http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${api}&q=`;

  const locationFetcher = async () => {
    try {
      const resource = await fetch(baseLinkFetch + place);
      console.log(resource);
      if (resource.ok) {
        const data = await resource.json();
        dispatch({ type: "ADD_LAT", payload: data[0].lat });
        dispatch({ type: "ADD_LON", payload: data[0].lon });
        console.log("data", data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resultFetch = async () => {
    try {
      const resource2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9466d5a6fc0162c8f3e9dbc128e05d9&units=metric`
      );
      if (resource2.ok) {
        const data2 = await resource2.json();
        console.log("data2", data2);
        dispatch({ type: "WEATHER", payload: data2 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    locationFetcher();
    resultFetch();
  }, [place]);

  //   const resultFetcher = asyns
  console.log("meteo Data", meteoData);
  return (
    <>
      {meteoData && (
        <Card>
          <Card.Body>
            <Card.Title>città {place} </Card.Title>
            <Card.Text>temperature: {meteoData?.main?.temp}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Main;
