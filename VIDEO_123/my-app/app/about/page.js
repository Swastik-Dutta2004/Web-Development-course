import React from 'react'
import Script from 'next/script'

const about = () => {
  return (
    <div>
        <Script>
            {`alert ("welcome to about section")`}
        </Script>
        I am about
    </div>
  )
}

export default about

export const metadata = {
  title: "Contact Facebook - connect with the world",
  description: "This is contact of Facebook and we can connect with world with facebook",
}