import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ManyDays = () => {
  const dispatch = useDispatch();
  const manyDays = useSelector((state) => state.manyDays);
  const lat = useSelector((state) => state.lat);
  const lon = useSelector((state) => state.lon);

  const api = "a58608a54647062d097718fd7013334b";

  const ManyDaysFetch = async () => {
    try {
      const resource2 = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?appid=${api}&lat=${lat}&lon=${lon}&units=metric`
      );
      if (resource2.ok) {
        const data2 = await resource2.json();
        console.log("many days bordelli", data2);
        dispatch({ type: "MANY_DAYS", payload: data2 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ManyDaysFetch();
  }, [lat, lon]);

  //   const resultFetcher = asyns

  return (
    <>
      <Row s={1} md={2} lg={3} className="g-1">
        {manyDays &&
          manyDays?.list &&
          manyDays.list
            .filter((_, i) => i % 8 === 0)
            .map((e, i) => (
              <Col key={`alfa${i}`}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                    style={{ width: "100px" }}
                  />
                  <Card.Body>
                    <Card.Title>temp: {e.main.temp}</Card.Title>
                    <Card.Text>weather: {e.weather[0].description}</Card.Text>
                    <Card.Text>{`wind: ${e.wind.deg}/${e.wind.gust}/${e.wind.speed}`}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </>
  );
};

export default ManyDays;
