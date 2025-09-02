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


            <div className='flex flex-col text-black p-4 gap-3 items-center'>
                <input className='rounded-full border border-green-400 w-full px-3 py-1' type="text" placeholder='Enter website Link' />
                <div className='flex w-full justify-between gap-8'>
                    <input className='rounded-full border border-green-400 w-full px-3 py-1' type="text" placeholder='Username' />

                    <div className="relative">
                        <input className='rounded-full border border-green-400 w-full px-3 py-1' type="text" placeholder='Password' />
                        <span className='absolute right-3 top-1'>
                            <img src="eye.svg" alt="eye" />
                        </span>
                    </div>
                </div>
                <button className='flex justify-center items-center border-2 border-white rounded-full text-white w-fit px-5 py-1 hover:bg-green-800 hover:text-black hover:border-yellow-700 font-bold transition delay-150 gap-2'>
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