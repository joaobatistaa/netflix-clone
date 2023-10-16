import Image from 'next/image';

const Auth = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
            <Image 
                src="/images/logo.png" 
                alt="Logo" 
                className='h-12'
                width={100}
                height={100}
            />
        </nav>
        <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                <h2 className='text-white text-4xl mb-8 font-semibold'>
                    Sign in
                </h2>
                <div className='flex flex-col gap-4'>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
