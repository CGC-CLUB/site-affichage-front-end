import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664300883378-b259442e132f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1459731685/fr/photo/gros-plan-de-jeunes-d%C3%A9veloppeuses-de-logiciels-asiatiques-utilisant-un-ordinateur-pour-%C3%A9crire.webp?a=1&b=1&s=612x612&w=0&k=20&c=sG1udqaRonsQwPhV7Qw0ZcSkQXSaele_RjriSuoq9dw=",
  ];

  return (
    <div className="App flex min-h-screen flex-col">
      <Header />

      <AuroraBackground>
        {/* Main content here */}
        <main className="flex-grow">
          <Carousel className="mx-16 mt-8">
            <CarouselPrevious />
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex h-[75vh] items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </main>
      </AuroraBackground>

      <Footer />
    </div>
  );
}
