import React, { useState } from 'react';

const Example10 = () => {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([
    { id: 0, name: 'Mark', age: 38 },
    { id: 1, name: 'Hanna', age: 27 }
  ]);

  function change(e) {
    setValue(e.target.value);
  }

  // eslint-disable-next-line no-undef
  const click = useCallback(id => {
    setPersons(persons => {
      return persons.map(person =>
        person.id === id
          ? {
              ...person,
              age: person.age + 1,
            }
          : {
              ...person,
            },
      );
    });
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      {persons.map(person => (
        <Person {...person} key={person.id} click={click} />
      ))}
    </div>
  );
};

export default Example10;
const Person = React.memo(({ id, name, age, click }) => {
  console.log('Person...');
  function onClick() {
    click(id);
  }
  return (
    <div>
      {name}, {age} <button onClick={onClick}>+</button>
      <button onClick={click}></button>
    </div>
  );
});
