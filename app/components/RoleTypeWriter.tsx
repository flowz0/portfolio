"use client";

import { Typewriter } from "react-simple-typewriter";

export default function RoleTypeWriter() {
  return (
    <Typewriter 
      words={["Full-Stack Web Developer", "Computer Programmer", "Software Engineer"]}
      loop={2}
    />
  )
}
