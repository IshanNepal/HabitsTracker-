import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Working Out", Day: 8 },
  { name: "Sleeping Before 9", Day: 9 },
  { name: "Drinking Water Everyday", Day: 3 },
  { name: "Brushing Teeth at 9 AM", Day: 2 },
  { name: "Cleaning the Room Every Thursday", Day: 2 },
];

export default function MyBarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#8884d8" tick={{ fontSize: 12 }}  angle={-10}  interval={0} />
        <YAxis />
        <Tooltip
          contentStyle={{ backgroundColor: "white", borderRadius: "4px", border: "none" }}
          itemStyle={{ color: "#ffffff" }}
          labelStyle={{ fontWeight: "bold" }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="Day" fill="#b89575" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}
