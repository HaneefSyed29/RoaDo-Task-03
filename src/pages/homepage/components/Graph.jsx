import React from "react"; // Import React library for building components

// Import necessary components from Recharts library for creating charts
import { ResponsiveContainer, XAxis, YAxis, AreaChart, Area } from "recharts";

// Import graph data from a separate file (likely "../../../utils/data/Data.js")
import { graphData } from "../../../utils/data/Data";

const Graph = () => {
  return (
    <div className="mx-4 xs:mx-10 my-6 bg-white rounded-xl p-4 border w-auto">
      <p className="text-lg font-semibold border-b mb-12 pb-4">Performance</p>{" "}
      {/* Title for the graph */}
      <ResponsiveContainer width="100%" aspect={3}>
        {" "}
        {/* Responsive container for the chart */}
        <AreaChart
          data={graphData} //Pass graph data to the chart
          margin={{ top: 10, right: 30, left: 0, bottom: 30 }} //Set margins for the chart
        >
          <defs>
            {/* Define gradients for area fills */}
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />{" "}
              {/* Blue gradient with 80% opacity */}
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />{" "}
              {/* Transparent at the end */}
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />{" "}
              {/* Green gradient with 80% opacity */}
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />{" "}
              {/* Transparent at the end */}
            </linearGradient>
          </defs>
          <XAxis dataKey="day" />{" "}
          {/* Define X-axis based on "day" property in data */}
          <YAxis /> {/* Define Y-axis (automatic scaling) */}
          <Area
            type="monotone" // Use monotone line for smoother curves
            name="Facebook" // Label for the area
            dataKey="facebookUsers" // Data property for Facebook users
            stroke="#8884d8" // Blue stroke color
            fillOpacity={50} // Set fill opacity to 50%
            fill="url(#colorUv)" // Use the blue gradient for fill
          />
          <Area
            type="monotone"
            name="Instagram"
            dataKey="instaUsers"
            stroke="#82ca9d" // Green stroke color
            fillOpacity={50}
            fill="url(#colorPv)" //Use the green gradient for fill
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center w-full justify-center space-x-8 mb-3 text-gray-500">
        <p className="font-semibold ">Instagram</p>{" "}
        {/* Legend for Instagram data */}
        <p className="font-semibold">Facebook</p>{" "}
        {/* Legend for Facebook data */}
      </div>
    </div>
  );
};

export default Graph;
