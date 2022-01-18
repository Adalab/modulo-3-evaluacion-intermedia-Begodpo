import { useState, useEffect } from "react";

import "../styles/App.scss";

function App() {
  const [adalabers, setAdalabers] = useState([]);

  useEffect(() => {
    fetch(
      "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json"
    )
      .then((response) => response.json())
      .then((responseData) => {
        setAdalabers(responseData.results);
      });
  }, []);

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return (
        <tbody key={adalaber.id}>
          <tr>
            <td>{adalaber.name}</td>
            <td>{adalaber.counselor}</td>
            <td>{adalaber.speciality}</td>
          </tr>
        </tbody>
      );
    });
  };

  return (
    <div>
      <header>
        <h1>Adalabers</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          {renderAdalabers()}
        </table>
      </main>
    </div>
  );
}

export default App;
