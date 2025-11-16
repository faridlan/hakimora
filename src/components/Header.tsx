function Header() {
    return (
        <header className='w-full py-6 px-6 md:px-12 flex items-center justify-between bg-[#111] shadow-lg'>
            <h1 className='text-2xl font-bold text-white'>Faridlan Nul Hakim</h1>
            <nav className='space-x-6 text-sm text-gray-300'>
                <a href='#projects' className='hover:text-white'>Projects</a>
                <a href='#about' className='hover:text-white'>About</a>
                <a href='#contact' className='hover:text-white'>Contact</a>
            </nav>
        </header>
    )
}


export default Header