import { Fragment, useEffect, useState } from "react";
import CardSmall from "../component/CardSmall";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {

  const [plant, setPlant] = useState([]);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6561395c54105e766fd4d490?meta=false")
      .then((response) => response.json())
      .then((json) => setPlant(json))
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <p id="home">Tanaman Hias</p>
      {plant.map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall
            title={item.name}
            img={item.image}
            desc={item.species}
            //onClick={() => window.location.replace(`http://localhost:3000/home/${item.title}`)}
            onClick={() =>  navigate(`detail`, { state: item })}
          />
          {plant.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}

