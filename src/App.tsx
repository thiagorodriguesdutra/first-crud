export function App() {
  return (
    <form className="mt-10 pt-10 pb-10 px-16 w-full max-w-lg bg-white flex flex-col items-center justify-center gap-4 leading-10 rounded-lg">
      <h1 className='font-bold text-3xl'>Criar conta</h1>
      <p className='text-lg text-gray-500 leading-6'>Já possui uma conta? <a href="#" className='text-sky-400 underline'>Login</a></p>

      <input type="text"  placeholder="Username" className='pl-1 w-full border border-gray-300 rounded'/>
      <div className='w-full flex gap-1'>
        <input type="text" placeholder="Primeiro nome" className='pl-1 flex-1 border border-gray-300 rounded'/>
        <input type="text" placeholder="Sobrenome" className='pl-1 flex-1 border border-gray-300 rounded' />
      </div>
      <input type="email" placeholder="E-mail" className='pl-1 w-full border border-gray-300 rounded' />
      <button className='p-2 w-full rounded bg-sky-400 text-white text-lg'>Criar conta</button>
      <footer className='flex items-center justify-center gap-2'>
        <div className=' w-4 h-4 border border-gray-300 rounded-full cursor-pointer'>
          <span></span>
        </div>
        <p className='text-sm text-gray-500'>Eu li e aceito todos os <a href="#" className=' text-sky-400'>Termos de serviço</a></p>
      </footer>
    </form>
  )
}