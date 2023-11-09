function Home() {
    return (
        <>
            <div className="bg-cyan-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde a Farmácia Mais Saúde!
                        </h2>
                        <p className='text-xl'>
                            Consulte nossas tabelas de Produtos
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                            >
                                Ver Produtos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src = "https://cdn-icons-png.flaticon.com/512/1686/1686939.png"
                            alt="Imagem da Página Home" 
                            width="300px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

