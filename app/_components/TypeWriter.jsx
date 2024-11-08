"use client";

import { Typewriter } from 'react-simple-typewriter';

export default function TypeWriter() {
    return (
        <Typewriter
            words={['Full Stack Developer', 'Designer', 'Software Engineer']}
            loop={5}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    )
}
