"use client";

import { Typewriter } from "react-simple-typewriter";

export default function RoleTypeWriter() {
  return (
    <Typewriter 
      words={["Full-Stack Developer", "Designer", "Software Engineer"]}
      loop={3}
    />
  )
}
