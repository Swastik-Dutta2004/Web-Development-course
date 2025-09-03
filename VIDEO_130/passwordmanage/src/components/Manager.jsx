import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("password")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    let showPassword = () => {
        passwordref.current.type = "text"
        console.log(ref.current.src);
        
        if (ref.current.src.includes("src/showeye.svg")) {
            ref.current.src = "src/crosseye.svg"
            passwordref.current.type = "password"

        }
        else {
            ref.current.src = "src/showeye.svg"
            passwordref.current.type = "text"


        }
    }

    const saveChange = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form]);

    }

    const handelchange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
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
                            <input ref={passwordref} value={form.password} onChange={handelchange} className='rounded-full border border-green-400 w-full px-3 py-1' type="password" placeholder='Password' name='password' />
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
                <div className="password">
                    <h2 className='text-2xl font-bold mb-4 text-center text-white'>Your Password</h2>
                    {passwordArray.length === 0 && <div>No Password has saved</div>}
                    {passwordArray.length != 0 &&
                        <table className='min-w-full divide-y divide-slate-700 rounded-lg overflow-hidden'>
                            <thead className='bg-slate-800'>
                                <tr>
                                    <th scope='col' className='px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider'>
                                        Site
                                    </th>
                                    <th scope='col' className='px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider'>
                                        Username
                                    </th>
                                    <th scope='col' className='px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider'>
                                        Password
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-slate-700'>
                                {passwordArray.map((row,index) => (
                                    <tr key={index} className='bg-slate-900/40 hover:bg-slate-800/50 transition-colors'>
                                        <td className='max-w-32 py-4 whitespace-nowrap text-sm font-medium text-white text-center'><a href="row.site">
                                            {row.site}</a>
                                        </td>
                                        <td className='max-w-32 py-4 whitespace-nowrap text-sm text-gray-300 text-center'>
                                            {row.username}
                                        </td>
                                        <td className='max-w-32 py-4 whitespace-nowrap text-sm text-gray-300 text-center'>
                                            {row.password}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}

                </div>

            </div>

        </>
    )
}

export default Manager