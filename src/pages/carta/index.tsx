import { useState } from 'react'
import { vinhos } from '../../utils/database'
import Link from 'next/link'

export default function Carta() {

    return (
        <div className='flex flex-column w-full h-full bg-[url("/assets/bg_carta.jpg")] bg-fixed bg-contain bg-no-repeat'>
            <div>
                <div className='md:ml-96 h-full p-8 bg-black bg-opacity-75 md:bg-opacity-100'>
                    <h1 className='font-normal text-3xl text-center mb-4 text-white'>Carta de Vinhos</h1>
                    { vinhos.map(vin => (
                        <div key={vin.id}>
                            {(vin.id === 4) && 
                                <div className='mt-4 mb-2 font-normal text-2xl text-center text-pink-500'>
                                    {vin.categoria}
                                </div>
                            }
                            <div className='flex flex-row justify-between mb-8 md:w-3/4 xl:w-5/6'>
                                <div className='w-3/4'>
                                    <div className='font-light text-2xl text-pink-500'>{vin.nome}</div>
                                    <div className='font-light text-xl text-white'>{vin.subtitulo}</div>
                                    <div className='font-light text-xl text-white'>{vin.descricao}</div>
                                </div>
                                <div>
                                    <div className='font-light text-2xl text-pink-500'>
                                        {Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(vin.preco)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
