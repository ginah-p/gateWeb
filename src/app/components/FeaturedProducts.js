
const FeaturedProducts = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-4">
          <div className="bg-gray-200 h-48 mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Aluminium Gate</h3>
          <p>A sturdy and stylish gate for your driveway.</p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="bg-gray-200 h-48 mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Aluminium Window</h3>
          <p>A modern and energy-efficient window for your home.</p>
        </div>
        <div className="border rounded-lg p-4">
          <div className="bg-gray-200 h-48 mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Custom Design</h3>
          <p>We can create any custom design you can imagine.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;