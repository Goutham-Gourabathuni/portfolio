"use client";

import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="particles"
        options={{
          fullScreen: {
            enable: false,
          },

          background: {
            color: {
              value: "#050505",
            },
          },

          particles: {
            number: {
              value: 100,
            },

            color: {
              value: "#22c55e",
            },

            move: {
              enable: true,
              speed: 2,
            },

            size: {
              value: 5,
            },
          },
        }}
      />
    </div>
  );
}