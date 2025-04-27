import { Button } from "@/components/ui/button";
import navigation from "@/routes/navigation";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-4 py-2 h-150">
      {/* Navigation display */}
      <div className="flex justify-center items-center">
        <img src="src\imagens\cinema.jpg" className="w-150"></img>
      </div>
      <p className="flex items-center justify-center text-orange-300">
        A magia do cinema clássico, agora pertinho de você!
      </p>
      <nav className="flex items-center justify-center gap-2 pb-2">
        <Link to="/programacao">
          <Button className="bg-white w-33 text-black">Ver Programação</Button>
        </Link>
      </nav>
    </div>
  );
}
