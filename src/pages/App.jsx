//* Libraries imports
import React from "react";

//* Components imports


//* Routes imports
import PublicRoutes from "@/routes/public-routes";



export default function App() {
  return (
    <div className="px-4 py-2 h-dvh bg-red-900">
      <nav className="bg-red-950 h-10 w-140 m-auto">
        <div className="flex justify-center gap-3 font-bold ">
          <div className="navbar-header">
            <a href="/"className="text-white text-[25px]">CineLuxe</a>
          </div>
          <ul className="flex justify-center gap-3 text-[20px] pt-[4px]">
            <li className="text-white">
              <a href="/programacao">Programação</a>
            </li>
            <li className="text-white">
              <a href="/contato">Contato</a>
            </li>
            <li className="text-white">
              <a href="">Localização</a>
            </li>
          </ul>
        </div>
      </nav>
      <footer className="bottom-0 left-0 fixed text-white"> &copy; Direitos autorais  - Todos os direitos
      reservados - CineLuxe 2025</footer>
      {/* Showing the component */}
      <PublicRoutes />
    </div>
  );
}
