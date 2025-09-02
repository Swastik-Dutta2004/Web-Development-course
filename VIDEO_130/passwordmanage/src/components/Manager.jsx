import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <div className='max-w-6xl mycontainer text-white'>
                <h1 className='font-bold text-2xl text-center'>
                    <span className='text-green-800'>&lt;PA</span>
                    ssMana
                    <span className='text-green-800'>Ge/&gt;</span>
                </h1>
                <p className='text-yellow-400 text-center'>Your own Password Manager</p>
                <div className='flex flex-col text-white p-4 gap-3'>
                    <input className='rounded-xl border border-green-400 w-full px-4 py-1' type="text" />
                    <div className='flex'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Manager