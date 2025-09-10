
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-gray-800 text-white py-32 px-4 text-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599493356221-a39e5a49154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Aluminium Gate"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative">
        <h1 className="text-5xl font-bold mb-4">High-Quality Aluminium Gates & Windows</h1>
        <p className="text-xl mb-8">Custom designs to secure and beautify your property.</p>
        <Link href="/gallery">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">View Our Work</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;