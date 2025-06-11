import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const StockLineChart = ({ products }) => (
  <div className="bg-white border">
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={products}>
        <XAxis dataKey="name" />
        <YAxis dataKey="stock" />
        <Tooltip />
        <Line type="monotone" dataKey="stock" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
