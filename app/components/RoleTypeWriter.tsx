"use client";

import { Typewriter } from "react-simple-typewriter";

export default function RoleTypeWriter() {
  return (
    <Typewriter 
      words={["Software Engineer", "Designer", "Freelancer", "Tech Enthusiast", "Full Stack Developer"]}
      loop={2}
    />
  )
}
