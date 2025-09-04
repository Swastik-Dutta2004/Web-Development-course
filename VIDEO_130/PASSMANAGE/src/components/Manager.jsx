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

    // Eye icon SVGs for show/hide password
    const EyeIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>
    );

    const EyeOffIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
    );

    const CopyIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
    );

    const DeleteIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="3,6 5,6 21,6"/>
            <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
            <line x1="10" y1="11" x2="10" y2="17"/>
            <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
    );

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const saveChange = () => {
        if (form.site && form.username && form.password) {
            setpasswordArray([...passwordArray, { ...form, id: Date.now() }])
            localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: Date.now() }]))
            setform({ site: "", username: "", password: "" })
        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    const deletePassword = (id) => {
        const updatedArray = passwordArray.filter(item => item.id !== id)
        setpasswordArray(updatedArray)
        localStorage.setItem("password", JSON.stringify(updatedArray))
    }

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <div className='max-w-6xl mx-auto px-4 text-white min-h-screen'>
                <div className="text-center mb-8 pt-8">
                    <h1 className='font-bold text-4xl mb-2'>
                        <span className='text-green-400'>&lt;PA</span>
                        <span className='text-white'>ssMana</span>
                        <span className='text-green-400'>Ge/&gt;</span>
                    </h1>
                    <p className='text-yellow-400 text-lg'>Your own Password Manager</p>
                </div>

                {/* Form Section */}
                <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-700/50'>
                    <div className='flex flex-col gap-4'>
                        <input 
                            value={form.site} 
                            onChange={handlechange} 
                            className='rounded-xl border border-green-400/50 bg-slate-700/50 text-white placeholder-gray-400 w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all' 
                            type="text" 
                            placeholder='Enter website URL' 
                            name='site' 
                        />
                        
                        <div className='flex flex-col md:flex-row w-full gap-4'>
                            <input 
                                value={form.username} 
                                onChange={handlechange} 
                                className='rounded-xl border border-green-400/50 bg-slate-700/50 text-white placeholder-gray-400 w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all' 
                                type="text" 
                                placeholder='Username' 
                                name='username' 
                            />

                            <div className="relative w-full">
                                <input 
                                    ref={passwordref} 
                                    value={form.password} 
                                    onChange={handlechange} 
                                    className='rounded-xl border border-green-400/50 bg-slate-700/50 text-white placeholder-gray-400 w-full px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all' 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Password' 
                                    name='password' 
                                />
                                <button 
                                    type="button"
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-400 transition-colors' 
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                            </div>
                        </div>
                        
                        <button 
                            onClick={saveChange} 
                            disabled={!form.site || !form.username || !form.password}
                            className='flex justify-center items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white w-fit mx-auto px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 gap-2'
                        >
                            <span className="text-xl">+</span>
                            Add Password
                        </button>
                    </div>
                </div>

                {/* Passwords Section */}
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <h2 className='text-3xl font-bold mb-6 text-center text-white'>Your Passwords</h2>
                    
                    {passwordArray.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-lg mb-2">No passwords saved yet</div>
                            <div className="text-gray-500 text-sm">Add your first password above to get started</div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                            {/* Desktop Table View */}
                            <div className="hidden md:block">
                                <table className='min-w-full'>
                                    <thead className='bg-slate-700/50'>
                                        <tr>
                                            <th scope='col' className='px-6 py-4 text-left text-sm font-semibold text-green-400 uppercase tracking-wider'>
                                                Website
                                            </th>
                                            <th scope='col' className='px-6 py-4 text-left text-sm font-semibold text-green-400 uppercase tracking-wider'>
                                                Username
                                            </th>
                                            <th scope='col' className='px-6 py-4 text-left text-sm font-semibold text-green-400 uppercase tracking-wider'>
                                                Password
                                            </th>
                                            <th scope='col' className='px-6 py-4 text-center text-sm font-semibold text-green-400 uppercase tracking-wider'>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='divide-y divide-slate-600/50'>
                                        {passwordArray.map((row, index) => (
                                            <tr key={row.id || index} className='bg-slate-800/20 hover:bg-slate-700/30 transition-colors'>
                                                <td className='px-6 py-4'>
                                                    <a 
                                                        href={row.site.startsWith('http') ? row.site : `https://${row.site}`} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className='text-blue-400 hover:text-blue-300 transition-colors break-all'
                                                    >
                                                        {truncateText(row.site, 30)}
                                                    </a>
                                                </td>
                                                <td className='px-6 py-4 text-white break-all'>
                                                    {truncateText(row.username, 25)}
                                                </td>
                                                <td className='px-6 py-4 text-white font-mono break-all'>
                                                    {'•'.repeat(Math.min(row.password.length, 12))}
                                                </td>
                                                <td className='px-6 py-4'>
                                                    <div className='flex justify-center space-x-2'>
                                                        <button 
                                                            onClick={() => copyToClipboard(row.username)}
                                                            className='p-2 text-gray-400 hover:text-green-400 hover:bg-slate-600/50 rounded-lg transition-all'
                                                            title="Copy Username"
                                                        >
                                                            <CopyIcon />
                                                        </button>
                                                        <button 
                                                            onClick={() => copyToClipboard(row.password)}
                                                            className='p-2 text-gray-400 hover:text-green-400 hover:bg-slate-600/50 rounded-lg transition-all'
                                                            title="Copy Password"
                                                        >
                                                            <CopyIcon />
                                                        </button>
                                                        <button 
                                                            onClick={() => deletePassword(row.id || index)}
                                                            className='p-2 text-gray-400 hover:text-red-400 hover:bg-slate-600/50 rounded-lg transition-all'
                                                            title="Delete"
                                                        >
                                                            <DeleteIcon />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Card View */}
                            <div className="md:hidden space-y-4 p-4">
                                {passwordArray.map((row, index) => (
                                    <div key={row.id || index} className='bg-slate-700/30 rounded-xl p-4 border border-slate-600/50'>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-xs text-green-400 uppercase tracking-wider font-semibold">Website</label>
                                                <div className="mt-1">
                                                    <a 
                                                        href={row.site.startsWith('http') ? row.site : `https://${row.site}`} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className='text-blue-400 hover:text-blue-300 transition-colors break-all text-sm'
                                                    >
                                                        {row.site}
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <label className="text-xs text-green-400 uppercase tracking-wider font-semibold">Username</label>
                                                <div className="mt-1 text-white break-all text-sm">{row.username}</div>
                                            </div>
                                            
                                            <div>
                                                <label className="text-xs text-green-400 uppercase tracking-wider font-semibold">Password</label>
                                                <div className="mt-1 text-white font-mono text-sm">{'•'.repeat(Math.min(row.password.length, 12))}</div>
                                            </div>
                                            
                                            <div className="flex justify-end space-x-2 pt-2">
                                                <button 
                                                    onClick={() => copyToClipboard(row.username)}
                                                    className='p-2 text-gray-400 hover:text-green-400 hover:bg-slate-600/50 rounded-lg transition-all'
                                                    title="Copy Username"
                                                >
                                                    <CopyIcon />
                                                </button>
                                                <button 
                                                    onClick={() => copyToClipboard(row.password)}
                                                    className='p-2 text-gray-400 hover:text-green-400 hover:bg-slate-600/50 rounded-lg transition-all'
                                                    title="Copy Password"
                                                >
                                                    <CopyIcon />
                                                </button>
                                                <button 
                                                    onClick={() => deletePassword(row.id || index)}
                                                    className='p-2 text-gray-400 hover:text-red-400 hover:bg-slate-600/50 rounded-lg transition-all'
                                                    title="Delete"
                                                >
                                                    <DeleteIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Manager