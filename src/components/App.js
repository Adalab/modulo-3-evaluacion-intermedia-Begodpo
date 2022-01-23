import { useState, useEffect } from "react";
import getAdalabers from "../services/api";
import "../styles/App.scss";

function App() {
  // states
  const [adalabers, setAdalabers] = useState([]);

  const [newAdalaber, setNewAdalaber] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });

  // handle
  const handleChangeName = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      name: ev.currentTarget.value,
    });
  };
  const handleChangeCounselor = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      counselor: ev.currentTarget.value,
    });
  };
  const handleChangeSpeciality = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      speciality: ev.currentTarget.value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleClickNewAdalaber = (ev) => {
    newAdalaber.id = adalabers.length;
    setAdalabers([...adalabers, newAdalaber]);
    setNewAdalaber({
      name: "",
      counselor: "",
      speciality: "",
    });
  };

  // effects
  useEffect(() => {
    getAdalabers().then((responseData) => {
      setAdalabers(responseData.results);
    });
  }, []);

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return (
        <tr key={adalaber.id}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
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
            <tbody>{renderAdalabers()}</tbody>
          </table>
        </section>
        <section>
          <h2>Añadir una Adalaber</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre: </label>
            <input
              type="text"
              value={newAdalaber.name}
              onChange={handleChangeName}
            />
            <label htmlFor="">Tutora: </label>
            <input
              type="text"
              value={newAdalaber.counselor}
              onChange={handleChangeCounselor}
            />
            <label htmlFor="">Especialidad: </label>
            <input
              type="text"
              value={newAdalaber.speciality}
              onChange={handleChangeSpeciality}
            />
            <button onClick={handleClickNewAdalaber}>
              Añadir una nueva Adalaber
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
