import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#EF4444",
  "#22C55E",
  "#F59E0B",
  "#8B5CF6",
  "#06B6D4",
];

const CategoryChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="mb-4">
        Email Categories
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="category"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;