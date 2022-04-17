/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Sat',
    uv: 4000,
    followers: 5,
    amt: 2400,
  },
  {
    name: 'Sum',
    uv: 3000,
    followers: 10,
    amt: 2210,
  },
  {
    name: 'Mon',
    uv: 2000,
    followers: 9,
    amt: 2290,
  },
  {
    name: 'Tues',
    uv: 2780,
    followers: 13,
    amt: 2000,
  },
  {
    name: 'Wed',
    uv: 1890,
    followers: 12,
    amt: 2181,
  },
  {
    name: 'Thur',
    uv: 2390,
    followers: 15,
    amt: 2500,
  },
  {
    name: 'Fri',
    uv: 3490,
    followers: 18,
    amt: 2100,
  },
];

export default class DemoComposedChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="followers" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="followers" fill="#8884d8" stroke="#8884d8" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
