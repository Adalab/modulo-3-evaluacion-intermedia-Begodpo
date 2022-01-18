import { useState } from "react";
import contacts from "../data/contacts";
import getAdalabers from "../services/api";
import "../styles/App.scss";

function App() {
  // state
  const [adalaberList, setAdalaberList] = useState([]);

  //effects

  // render
  const adalabers = adalaberList.results;
  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      console.log(adalaber);
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
  );
}

export default App;
