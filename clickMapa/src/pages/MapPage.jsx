import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import api from "../services/api";

import "./MapPage.css";

const MapPage = () => {
  const [apis, setApis] = useState(null);
  const [marker, setMarker] = useState();
  const [local, setLocal] = useState();
  const [texto, setTexto] = useState();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBOZwEIr8i-2PXPKOhn6S4y1IA2AgQvtA4",
  });

  // const fetchCharacters = async (api) => {
  //   const response = await fetch(`https://elas-api.mocklab.io/markers/`);
  //   const data = await response.json();
  //   return data;
  // };

  useEffect(() => {
    api
      .get("/markers/")
      .then((response) => setApis(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  // useEffect(() => {
  //   fetchCharacters("Walter White").then((data) => {
  //     setApis(data);
  //   }, []);
  // }, []);

  // const locais = {
  //   pistadeskate: {
  //     lat: -23.440258,
  //     lng: -45.069189,
  //     texto: "Pista de Skate",
  //   },
  //   casadacultura: {
  //     lat: -23.441332,
  //     lng: -45.082821,
  //     texto: "Casa da Cultura",
  //   },
  //   mais1: {
  //     lat: -23.441344,
  //     lng: -45.082833,
  //     texto: "Mais 1",
  //   },
  // };

  return (
    <>
      <div className="menu">
        {apis ? (
          <>
            {console.log("02-locais", apis.casadoleal)}
            <button
              className="buttons"
              onClick={() => {
                setLocal(apis.pistadeskate);
                setTexto(apis.pistadeskate.texto);
              }}
            >
              Pista de Skate
            </button>
            <button
              className="buttons"
              onClick={() => {
                setLocal(apis.casadoleal);
                setTexto(apis.casadoleal.texto);
              }}
            >
              Casa do Leal
            </button>
            <button
              className="buttons"
              onClick={() => {
                setLocal(apis.casadacultura1);
                setTexto(apis.casadacultura1.texto);
              }}
            >
              {setButton(apis.nomedobotao)}
            </button>
          </>
        ) : (
          <div>
            <h1>Carregando...</h1>
          </div>
        )}
      </div>
      <div className="container">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={local ? local : { lat: -23.441344, lng: -45.082833 }}
            zoom={15}
          >
            <Marker
              position={local}
              options={{
                label: {
                  text: texto,
                  className: "marker",
                },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
//
export default MapPage;
