import React from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchat, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footerers() {
  return (
    <footer style={{ backgroundColor: "linear-gradient(to right, #b9b3b3, #af0c0c)", color: "white", width: "100%" }}>
      <div className="container-fluid">
        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FontAwesomeIcon icon={faInstagram} className="mr-300" style={{ fontSize: "24px" }} />
          <FontAwesomeIcon icon={faSnapchat} className="mr-300" style={{ fontSize: "24px" }} />
          <FontAwesomeIcon icon={faTwitter} className="mr-300" style={{ fontSize: "24px" }} />
          <span style={{ flex: "1", textAlign: "center" }}>© 2019. Octane Motore Garage</span>
        </span>
      </div>
    </footer>
  );
}

