
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-8">Contact us today for a free quote on your new aluminium gates and windows.</p>
      <Link href="/contact" className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold">
        Contact Us
      </Link>
    </div>
  );
};

export default CallToAction;