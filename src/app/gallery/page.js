
const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
        <div className="bg-gray-200 h-64"></div>
      </div>
    </div>
  );
};

export default GalleryPage;