import { useState } from "react";
import adalaberList from "../data/contacts.json";
import "../styles/App.scss";

function App() {
  const [adalabers, setAdalabers] = useState(adalaberList.results);
  console.log(adalabers);
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
