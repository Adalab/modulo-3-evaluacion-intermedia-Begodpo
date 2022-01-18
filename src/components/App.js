import "../styles/App.scss";
import adalaberList from "../data/contacts.json";

function App() {
  const adalabers = adalaberList.results;
  console.log(adalabers);
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
