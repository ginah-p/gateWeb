
import Image from 'next/image';

const GalleryPage = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1599493356221-a39e5a49154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', alt: 'Aluminium Gate 1' },
    { src: 'https://images.unsplash.com/photo-1621928382769-e7951b8a2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', alt: 'Aluminium Window 1' },
    { src: 'https://images.unsplash.com/photo-1599493356221-a39e5a49154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', alt: 'Aluminium Gate 2' },
    { src: 'https://images.unsplash.com/photo-1621928382769-e7951b8a2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', alt: 'Aluminium Window 2' },
    { src: 'https://images.unsplash.com/photo-1599493356221-a39e5a49154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', alt: 'Custom Design 1' },
    { src: 'https://images.unsplash.com/photo-1621928382769-e7951b8a2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', alt: 'Custom Design 2' },
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