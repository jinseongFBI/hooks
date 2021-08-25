import React, { useCallback, useMemo, useState } from 'react';

function sum(persons) {
  console.log('sum...');
  return persons.map(person => person.age).reduce((l, r) => l + r, 0);
}

export default function Example9(){
  const [value, setValue] = useState('');
  const [persons] = useState([{ name: 'Mark', age: 38 }, { name: 'Hanna', age: 27 }]);

  const count = useMemo(()=>{
    return sum(persons);
  }, [persons]);
  const click = useCallback(()=>{
    console.log(value);
  },[])

  // const count = sum(persons);

   return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
   function change(e) {
    setValue(e.target.value);
  }
}