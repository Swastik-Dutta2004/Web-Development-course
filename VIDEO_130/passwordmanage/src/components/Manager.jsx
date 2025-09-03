import React from 'react'
import { useRef,useState, useEffect } from 'react'

const Manager = () => {
const ref = useRef()
const [form, setform] = useState({site:"", username: "", password:""})
const [passwordArray, setpasswordArray] = useState([])

useEffect(() => {
  let passwords = localStorage.getItem("password")
  if(passwords){
    setpasswordArray(JSON.parse(passwords))
  }
}, [])


let showPassword = () => {
    alert("your Password will show be open")
    if (ref.current.src.includes("src/showeye.svg")) {
        ref.current.src = "src/crosseye.svg"
    }
    else {
        ref.current.src = "src/showeye.svg"

    }
}

const saveChange = () => {
    // setpasswordArray([...passwordArray, form])    
    // localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
    // console.log(passwordArray);
    
}

const handelchange = (e) => {
    setform({...form,[e.target.name]: e.target.value})
}
return (
    <>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        <div className='max-w-6xl mycontainer text-white'>
            <h1 className='font-bold text-2xl text-center'>
                <span className='text-green-800'>&lt;PA</span>
                ssMana
                <span className='text-green-800'>Ge/&gt;</span>
            </h1>
            <p className='text-yellow-400 text-center'>Your own Password Manager</p>


            <div className='flex flex-col text-black p-4 gap-3 items-center'>
                <input value={form.site} onChange={handelchange} className='rounded-full border border-green-400 w-full px-3 py-1' type="text" placeholder='Enter website Link' name='site' />
                <div className='flex w-full justify-between gap-8'>
                    <input value={form.username} onChange={handelchange} className='rounded-full border border-green-400 w-full px-3 py-1' type="text" placeholder='Username' name='username' />

                    <div className="relative">
                        <input value={form.password} onChange={handelchange} className='rounded-full border border-green-400 w-full px-3 py-1' type="text" placeholder='Password' name='password'/>
                        <span className='absolute right-3 top-1' onClick={showPassword}>
                            <img ref={ref} src="src/crosseye.svg" alt="eye" />
                        </span>
                    </div>
                </div>
                <button onClick={saveChange} className='flex justify-center items-center border-2 border-white rounded-full text-white w-fit px-5 py-1 hover:bg-green-800 hover:text-black hover:border-yellow-700 font-bold transition delay-150 gap-2'>
                    <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#ffffff">
                    </lord-icon>

                    Add Item</button>
            </div>

        </div>

    </>
)
}

export default Manager