import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const PriceBarChart = ({ products }) => (
  <div className="bg-white shadow shadow-amber-100 rounded-xl p-3">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={products}>
        <XAxis dataKey="title" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Bar dataKey="price" fill="#292d" />
      </BarChart>
    </ResponsiveContainer>
    <div className="text-center text-xl font-semibold">All Product's Price</div>
  </div>
);
