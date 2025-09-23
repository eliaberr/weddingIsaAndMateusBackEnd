import {  FaWaze } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export function CardLocation() {
  return (
    <div className="mt-10 text-start">
      <h2>Escolha o aplicativo da sua preferencia para abrir a localizacoa</h2>
      <div>
        <button>
          <SiGooglemaps/>
          Maps 
        </button>
        <button>
          <FaWaze/>
          waze
        </button>
      </div>
    </div>
  )
}