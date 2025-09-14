import React from 'react'
import { data } from 'react-router'
import { useState,useEffect } from 'react'

function github() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/Swastik-Dutta2004")
    .then(responce  => responce.json())
    .then(data => {
      console.log(data);
      setdata(data)
    })
  }, [])
  return (
    <div>Github followers:{data.followers}</div>
  )
}

export default github