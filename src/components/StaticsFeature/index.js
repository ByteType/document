import React, {useEffect, useState} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const CustomXAxisTick = ({x, y, payload}) => {
  return (
    <g transform={`translate(${x},${y + 30})`}>
      <image xlinkHref={payload.value} x={-15} y={-30} height="30px" width="30px" />
    </g>
  );
};

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'hsla(0,0%,100%,.8)',
        padding: '8px',
        border: '1px solid #f5f5f5;',
        lineHeight: '24px'}}>
        <img src={payload[0].payload.avatar_url} alt='avatar' width={30} height={30} />
        <p style={{paddingLeft: '10px', margin: 'auto'}}>{payload[0].payload.login}: {payload[0].value} commits</p>
      </div>
    );
  }
  return null;
};


export default function Graph({name}) {
  const [contributors, setContributors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/ByteType/${name}/contributors`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setContributors(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{width: '100%', height: '350px'}}>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={contributors}
          margin={{top: 20, right: 30, left: 20, bottom: 80}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey='avatar_url'
            height={60}
            tick={<CustomXAxisTick />}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey='contributions' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
