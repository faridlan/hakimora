function Hero() {
    return (
        <section className='w-full py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16'>
            {/* Text Section */}
            <div className='flex-1 space-y-6 text-center md:text-left'>
                <h2 className='text-5xl md:text-6xl font-extrabold leading-tight'>
                    Hi — I'm <span className='text-white'>Faridlan</span>.
                </h2>


                <p className='text-lg md:text-xl text-gray-300 font-medium'>
                    Backend Developer • TypeScript • Go • Docker • PostgreSQL
                </p>


                <p className='max-w-2xl text-gray-400 leading-relaxed mx-auto md:mx-0'>
                    I build scalable backend services, API architectures, and automation systems.
                    Passionate about clean engineering and reliable systems.
                </p>


                <div className='pt-4 flex gap-4 justify-center md:justify-start'>
                    <a
                        href='#contact'
                        className='px-6 py-3 rounded-xl bg-white text-black font-semibold shadow hover:opacity-90 transition'
                    >
                        Contact me
                    </a>


                    <a
                        href='#projects'
                        className='px-6 py-3 rounded-xl border border-gray-500 text-gray-300 font-semibold hover:border-gray-300 transition'
                    >
                        See projects
                    </a>

                    <a
                        href="/assets/CV_Faridlan Nul Hakim.pdf"
                        download
                        className='px-6 py-3 rounded-xl border border-gray-500 text-gray-300 font-semibold hover:border-gray-300 transition'
                    >
                        Download CV
                    </a>
                </div>
            </div>


            {/* Image Section */}
            <div className='flex-1 flex justify-center mb-10 md:mb-0'>
                <div className='relative w-80 h-80 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border border-gray-700 bg-[#111]'>
                    <img
                        src='/assets/faridlan.jpg'
                        alt='Faridlan photo'
                        className='w-full h-full object-cover object-[50%_70%]'
                    />


                    <div className='absolute inset-0 rounded-full bg-lienar-to-br from-transparent via-transparent to-black/40' />
                </div>
            </div>
        </section>
    )
}

export default Hero