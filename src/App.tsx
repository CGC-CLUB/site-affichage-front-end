import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./components/ui/Carousel";

function App() {
  // Array of random image URLs
  const images = [
    "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664300883378-b259442e132f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1459731685/fr/photo/gros-plan-de-jeunes-d%C3%A9veloppeuses-de-logiciels-asiatiques-utilisant-un-ordinateur-pour-%C3%A9crire.webp?a=1&b=1&s=612x612&w=0&k=20&c=sG1udqaRonsQwPhV7Qw0ZcSkQXSaele_RjriSuoq9dw=",
  ];

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />

      {/* Main content here */}
      <main className="flex-grow">
        <Carousel className="mt-8 mx-16">
          <CarouselPrevious />
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="h-64 flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </main>

      <Footer />
    </div>
  );
}

export default App;
