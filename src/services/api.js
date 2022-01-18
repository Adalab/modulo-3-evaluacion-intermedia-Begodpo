// Fichero src/services/api.js

const getAdalabers = () => {
  // Llamamos al API
  return fetch(
    "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json"
  ).then((response) => response.json())
};

export default getAdalabers;
