import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className='w-full h-screen justify-center items-center m-auto'>
            <div className='flex w-full h-screen justify-center items-center  flex-col gap-y-2'>
                <h2>
                    Afsuski bu sahifa topilmadi
                </h2>
                <Link className='w-32 p-1 rounded-lg border border-blue-600 flex items-center justify-center' href={'/'}>
                    Asosiy sahifa
                </Link>
            </div>
        </div>
    )
}

export default NotFound;