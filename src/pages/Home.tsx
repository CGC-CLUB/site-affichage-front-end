import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { posts } from "@/db/posts";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="App flex min-h-screen flex-col">
      <Header />

      <AuroraBackground>
        {/* Main content here */}
        <main className="flex-grow">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="mx-16 mt-8"
          >
            {/* <CarouselPrevious /> */}
            <CarouselContent>
              {posts.map((post, index) => (
                <CarouselItem
                  key={index}
                  className="flex h-[75vh] items-center justify-center"
                >
                  <div className="w-96 flex-1 space-y-10">
                    <div className="flex items-center justify-between text-3xl">
                      <h1>{post.user.first_name}</h1>
                      <time>{post.createdAt.toLocaleDateString()}</time>
                    </div>
                    <p className="text-4xl font-bold">{post.content}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselNext /> */}
          </Carousel>
        </main>
      </AuroraBackground>
      <Footer />
    </div>
  );
}
