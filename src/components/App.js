import { useState, useEffect } from "react";
import getAdalabers from "../services/api";
import "../styles/App.scss";

function App() {
  const [adalabers, setAdalabers] = useState([]);

  const [name, setName] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");

  const handleChangeName = (ev) => {
    setName(ev.currentTarget.value);
  };
  const handleChangeCounselor = (ev) => {
    setCounselor(ev.currentTarget.value);
  };
  const handleChangeSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value);
  };

  useEffect(() => {
    getAdalabers().then((responseData) => {
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
        <section>
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
        </section>
        <section>
          <h2>Añadir una Adalaber</h2>
          <form>
            <label htmlFor="">Nombre: </label>
            <input type="text" value={name} onChange={handleChangeName} />
            <label htmlFor="">Tutora: </label>
            <input
              type="text"
              value={counselor}
              onChange={handleChangeCounselor}
            />
            <label htmlFor="">Especialidad: </label>
            <input
              type="text"
              value={speciality}
              onChange={handleChangeSpeciality}
            />
            <button>Añadir una nueva Adalaber</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
