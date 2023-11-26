import React, { Fragment } from "react";
import "./Profile.css";
import data from "../component/data";
import profile from '../component/HabibPP.jpg';


export default function Profile() {
  return (
    <>
      {data.map((tentang, index) => (
        <Fragment key={tentang.id}>
          <div className="ProfCard" onClick={() => alert(tentang.nama+" aseli " +tentang.alamat)}>
            <div className="content">
              <img src={profile} alt="" className="photo" />
              <div className="description">
                <p id="nama">{tentang.nama}</p>
                <p id="nim">{tentang.nim}</p>
                <p id="kelompok">{tentang.kelompok}</p>
              </div>
            </div>
          </div>
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}