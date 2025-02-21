
import ImageWithFallback from "../ImageWithFallback";

interface GallerySectionProps {
  title: string;
  images: string[];
}

const GallerySection = ({ title, images }: GallerySectionProps) => {
  return (
    <section 
      id="gallery" 
      className="scroll-mt-24 animate-fade-up [animation-delay:600ms]"
      aria-labelledby="gallery-heading"
    >
      <h2 id="gallery-heading" className="text-3xl font-semibold mb-8">Visual Journey</h2>
      <div className="grid gap-8 sm:gap-12">
        {images.map((image, index) => (
          <figure 
            key={index} 
            className="space-y-4"
            role="group" 
            aria-label={`Design phase ${index + 1}`}
          >
            <ImageWithFallback
              src={image}
              alt={`${title} - Design phase ${index + 1} visualization`}
              className="w-full rounded-2xl shadow-lg"
              loading={index === 0 ? "eager" : "lazy"}
              allowZoom={true}
            />
            <figcaption className="text-sm text-muted-foreground text-center">
              Phase {index + 1} of the design process
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
