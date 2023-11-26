import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import DetailPart from "../component/DetailPlant";

export default function OthersDetail() {
    const { state } = useLocation();


    return (
        <>
        <p id="home"></p> 
        
          <Fragment key={state.id}>
            <DetailPart
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