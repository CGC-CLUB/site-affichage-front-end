import { GET_POSTS, GetPostsType } from "@/api/graphql/queries";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
// import { posts } from "@/db/posts";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { ApolloResponse } from "@/types";
import { useQuery } from "@apollo/client";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<ApolloResponse<GetPostsType> | null>();
  useQuery<GetPostsType>(GET_POSTS, {
    pollInterval: 20000,
    onCompleted: (data) => {
      setPosts(data.posts);
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return (
    <div className="App flex min-h-screen flex-col">
      <Header />

      <AuroraBackground>
        {/* Main content here */}
        <main className="flex-grow">
          <Carousel
            plugins={[
              // @ts-expect-error - i think its a type error
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="mx-16 mt-8"
          >
            {/* <CarouselPrevious /> */}
            <CarouselContent>
              {posts &&
                posts?.map((post) => (
                  <CarouselItem
                    key={post.id}
                    className="flex h-[75vh] items-center justify-center"
                  >
                    <div className="w-96 flex-1 space-y-10">
                      <div className="flex items-center justify-between text-3xl">
                        <h1>{post.author.first_name}</h1>
                        <time>{post.createdAt.slice(0, 10)}</time>
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
