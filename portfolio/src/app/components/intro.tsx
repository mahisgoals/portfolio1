import Image from 'next/image';
import Tabs from '../components/tabs';
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section id="/" className=" bg-main px-12 pt-10 lg:px-40 sm:px-20 sm:pt-10 relative">
      <div className="md:flex md:flex-row gap-x-8">
        <div className="flex-1 order-1 z-20">
          <h1 className="text-white text-4xl">Mahi<br />Sheraj<span className="text-pink">.</span></h1>
          <Link href="#contact">
            <button className="text-pink text-small">CONTACT ME</button>
          </Link>
        
          <div className="flex sm:flex-row sm:items-start sm:pt-24 pt-10 justify-center">
            <div className="relative sm:w-96 sm:h-96 w-64 h-64 bg-black rounded-full flex-shrink-0 shadow-2xl">
              <Image 
                className="absolute inset-0 w-full h-full z-30 pl-10" 
                src="/images/pinkProfile.png" 
                alt=":)SSS"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 z-20 order-2 relative py-10"> 
          <h1 className="text-white text-3xl"><span className="text-small text-pink">INTRODUCTION<br/></span>Software Engineer</h1>
          <p className="text-small text-white">Hi there! I&apos;m a software engineer with a passion for technology. I have dedicated myself to continue learning and mastering the fundamentals of software development. I&apos;m excited to share my journey with you and look forward to connecting!</p>  
          <br/>
          <Tabs/>      
        </div>
      </div>
    </section>
  );
}
