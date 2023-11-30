import { Fragment, useEffect, useState } from "react";
import CardSmall from "../component/CardSmall";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("https://api.jsonbin.io/v3/b/6561395c54105e766fd4d490?meta=false");
      const json = await response.json();
      setPlants(json);
      setFilteredPlants(json);
    };

    fetchPlants();
  }, []); // Added empty dependency array

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  let navigate = useNavigate();

  return (
    <>
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <p id="home">Tanaman Hias</p>
      {filteredPlants.map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall
            title={item.name}
            img={item.image}
            desc={item.species}
            onClick={() => navigate(`detail`, { state: item })}
          />
          {filteredPlants.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}
