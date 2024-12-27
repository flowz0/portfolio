"use client";

import { Typewriter } from "react-simple-typewriter";

export default function RoleTypeWriter() {
  return (
    <Typewriter
      words={["Full Stack Developer", "Designer", "Tech Enthusiast", "Software Engineer"]}
      loop={3}
    />
  )
}
