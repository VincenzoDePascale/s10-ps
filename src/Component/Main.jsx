import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Main = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);
  const città = useSelector((state) => state.location);
  console.log("selector", place);

  const baseLinkFetch = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=`;

  const api = "a58608a54647062d097718fd7013334b";

  useEffect(() => {
    locationFetcher();
  }, [place]);

  const locationFetcher = async () => {
    if (place && città) {
      try {
        const resource = await fetch(baseLinkFetch + api);
        console.log(resource);
        if (resource.ok) {
          const data = await resource.json();
          console.log("data", data);

          const resultFetch = async () => {
            try {
              const resource2 = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=a9466d5a6fc0162c8f3e9dbc128e05d9&units=metric`
              );
              if (resource2.ok) {
                const data2 = await resource2.json();
                console.log("data2", data2);
                dispatch({ type: "ADD", payload: data2 });
                return data2;
              }
            } catch (error) {
              console.log(error);
            }
          };
          resultFetch();
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   const resultFetcher = asyns

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>città {place} </Card.Title>
          <Card.Text>temperature: {}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Main;
