import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";

const MyChart = () => {
  const manyDays = useSelector((state) => state.manyDays);

  const data = manyDays?.list
    ?.filter((_, i) => i % 8 === 0)
    .map((e) => {
      return { name: e.dt_txt.slice(5, 10), "°C": e.main.temp };
    });
  console.log("data primo", data);
  console.log("manydays in charts", manyDays);
  return (
    <>
      {manyDays?.list && (
        <AreaChart
          width={500}
          height={400}
          data={manyDays?.list
            ?.filter((_, i) => i % 8 === 0)
            .map((e) => {
              return { name: e.dt_txt.slice(5, 10), "°C": e.main.temp };
            })}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="°C" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      )}
    </>
  );
};

export default MyChart;
