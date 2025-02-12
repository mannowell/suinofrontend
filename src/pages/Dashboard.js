import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Gerenciador de Suínos</h1>
      <nav>
        <ul>
          <li><Link to="/pavilhoes">Pavilhões</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
