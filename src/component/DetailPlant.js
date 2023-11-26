import "./DetailPlant.css";
import { useNavigate} from 'react-router-dom'

export default function DetailPlant({ model, title, img, detail, link }) {
    const history = useNavigate()
  return (
    
    <div className="showdetailPlant">
      <img src={img} alt="" className="photoPlant" />
      <div className="detailPlantmain">
        <div >
          <p id="modelPlant">{model}</p>
          <p id="titlePlant">{title}</p>
          <p id="detailPlant">{detail}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </div>
      <button id="BackButton" onClick={()=>history(-1)}>Go Back</button>
    </div>

  );
}