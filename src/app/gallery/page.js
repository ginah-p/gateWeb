
import Image from 'next/image';

const GalleryPage = () => {
  const images = [
    { src: 'https://via.placeholder.com/400x300.png?text=Aluminium+Gate+1', alt: 'Aluminium Gate 1' },
    { src: 'https://via.placeholder.com/400x300.png?text=Aluminium+Window+1', alt: 'Aluminium Window 1' },
    { src: 'https://via.placeholder.com/400x300.png?text=Aluminium+Gate+2', alt: 'Aluminium Gate 2' },
    { src: 'https://via.placeholder.com/400x300.png?text=Aluminium+Window+2', alt: 'Aluminium Window 2' },
    { src: 'https://via.placeholder.com/400x300.png?text=Custom+Design+1', alt: 'Custom Design 1' },
    { src: 'https://via.placeholder.com/400x300.png?text=Custom+Design+2', alt: 'Custom Design 2' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64">
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;