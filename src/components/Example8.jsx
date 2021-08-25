import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

 


export default function Example8(){
  const [state, dispatch] = useReducer(reducer, { count:0 });
   return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  //dispatch action 객체를 넣어서 실행
  function click() {
    dispatch({ type: 'PLUS' });
  }
}


