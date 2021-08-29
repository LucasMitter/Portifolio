import React from 'react';

function Component(props: { name: string }){
  return(
      <div>hello {props.name}</div>
  );
}

export default Component;