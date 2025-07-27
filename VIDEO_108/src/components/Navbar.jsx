import React,{useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
   alert("hey i will run on every reander")
  })
  
  useEffect(() => {
   alert("hey welcome to my page. This is the first render")
  }, [])
  
  useEffect(() => {
   alert("hey i am running beacuse color was changed")
  }, [color])

  useEffect(() => {
    alert("hey welcome to my page. This is the first render of app.jsx")

    return () => {
        alert("component was unmounted")
    }
  },[])
    
  return (
    <div>
      Hey i am {color} color NAvbar 
      hehe tumara maikichodo 
    </div>
  )
}

export default Navbar
