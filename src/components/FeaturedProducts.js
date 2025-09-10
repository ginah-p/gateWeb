
import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    { src: 'https://images.unsplash.com/photo-1599493356221-a39e5a49154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', alt: 'Aluminium Gate', name: 'Custom Aluminium Gate' },
    { src: 'https://images.unsplash.com/photo-1621928382769-e7951b8a2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', alt: 'Aluminium Window', name: 'Aluminium Window' },
    { src: 'https://images.unsplash.com/photo-1599493356221-a39e5a49154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', alt: 'Gate and Window', name: 'Gate & Window Combo' },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={product.src} alt={product.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;