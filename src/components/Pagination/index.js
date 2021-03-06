import React from "react";
import "./style.css";

function Index({ page, paginate, info }) {
  return (
    <div className="pagination">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevrons-left"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="11 7 6 12 11 17" />
          <polyline points="17 7 12 12 17 17" />
        </svg>
      </div>
      <div className="page" onClick={() => paginate(1)}>
        1
      </div>
      <div className="page" onClick={() => paginate(2)}>
        2
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevrons-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="7 7 12 12 7 17" />
          <polyline points="13 7 18 12 13 17" />
        </svg>
      </div>
    </div>
  );
}

export default Index;
