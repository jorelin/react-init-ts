import React from 'react';

function GrandChild(props: any) {
  console.log(props)
  return (
    <div>
      <h2>this is child</h2>
    </div>
  );
}

export default GrandChild;