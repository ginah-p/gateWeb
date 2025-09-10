
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
        <p className="text-lg mb-8">Contact us today for a free, no-obligation quote.</p>
        <Link href="/contact">
          <a className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200">Get a Free Quote</a>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;