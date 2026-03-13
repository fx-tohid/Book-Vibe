import React from 'react';
import { useLoaderData } from 'react-router';

import { ChevronDown, Users, FileText, MapPin } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ef4444', '#db2777', '#000000'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height} 
    C${x + width / 4},${y + height} ${x + width / 2.5},${y} ${x + width / 2},${y}
    C${x + width - width / 2.5},${y} ${x + width - width / 4},${y + height} ${x + width},${y + height}
    Z`;
};
const CustomColorLabel = (props) => {
  const { x, y, width, value, index } = props;
  const fill = colors[index % colors.length];
  return (
    <text 
      x={x + width / 2} 
      y={y - 10} 
      fill={fill} 
      textAnchor="middle" 
      dominantBaseline="middle"
      fontWeight="bold"
      fontSize="14"
    >
      {value}
    </text>
  );
};
const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;
    const color = colors[index % colors.length];

    return (
        <path
            d={getPath(x, y, width, height)}
            stroke="none"
            fill={color}
            style={{ transition: 'fill 0.3s ease' }}
        />
    );
};
const PagesRead = () => {

    const books = useLoaderData()
    return (
        <div className="w-full bg-[#f8f9fa] rounded-[2.5rem] p-10 font-sans">
            <div className="h-[500px] w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={books}
                        margin={{ top: 40, right: 30, left: 20, bottom: 40 }}
                        barSize={100}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#e5e7eb"
                        />
                        <XAxis
                            dataKey="bookName"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            dy={20}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                            domain={[0, 340]}
                            ticks={[0, 85, 170, 255, 340]}
                        />
                        <Tooltip cursor={{ fill: 'transparent' }} />

                        <Bar
                            dataKey="totalPages"
                            shape={<TriangleBar />}
                            isAnimationActive={true}
                        >
                            {books.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}

                            <LabelList
                                dataKey="totalPages"
                                position="top"
                                content={({ x, y, width, value, index }) => (
                                    <text
                                        x={x + width / 2}
                                        y={y - 15}
                                        fill={books[index].color}
                                        textAnchor="middle"
                                        fontWeight="bold"
                                        fontSize="14"
                                    >
                                        {value}
                                    </text>
                                )}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default PagesRead;