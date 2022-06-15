import React from 'react';
import moment from 'moment';

export default function Widget() {
  React.useEffect(() => {
    console.log('hooks');
  }, []);
  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'purple',
        color: 'white',
      }}
    >
      <h2>Platform Widget</h2>
      <p>
        Using <strong>momentjs</strong> ({moment.version}) for format the date
      </p>
      <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
}