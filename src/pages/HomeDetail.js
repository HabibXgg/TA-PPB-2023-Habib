import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import DetailPlant from "../component/DetailPlant";

export default function HomeDetail() {
    const { state } = useLocation();


    return (
        <>
        <p id="home"></p> 
        
          <Fragment key={state.id}>
            <DetailPlant
              title={state.species}
              img={state.image}
              model={state.name}
              link={state.url}
              detail={state.desc}
            />
  
          </Fragment>
      </>
    );
  }