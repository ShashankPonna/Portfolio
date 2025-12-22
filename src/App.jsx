import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Particles from "./Particle";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-100">
      
      {/* ===== Background Layer (Interactive) ===== */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ===== Content Layer ===== */}
      <div className="relative z-10 ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
