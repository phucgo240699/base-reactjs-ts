import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import apiProvider from './services';
import './App.css';

function App() {
  const [students, setStudents] = useState<any[]>([])
  useEffect(() => {
    apiProvider.users.getUsers().then((data) => {
      setStudents(data.data as any[])
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{`Server is running on ${process.env.REACT_APP_ENV} environment...`}</p>
        {
          students && <ol>
            {
              students.map((_student, index) => {
                return <li key={index}>{_student.name}</li>
              })
            }
          </ol>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
