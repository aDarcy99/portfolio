import React, { useState } from 'react';

export default function test({}) {
  const [name, setName] = useState('lachlan');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name}
    </div>
  );
}
