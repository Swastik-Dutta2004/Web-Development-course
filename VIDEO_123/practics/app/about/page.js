import React from 'react'
import Script from 'next/script'

const About = () => {
  return (
    <div>
      <script>{`alert("Chala ja BOSDK")`}</script>
       I am About
    </div>
  )
}

export default About

export const metadata = {
  title: "Fuck you beach",
  description: "This is facebook and we can connect with the world using facebook",
};
