import "./CardSmall.css";

export default function CardSmall({ title, desc, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <figure>
      <img src={img} alt="" className="photo" />
      </figure>
      <div className="description">
        <div>
          <p id="title">{title}</p>
          <p id="desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

