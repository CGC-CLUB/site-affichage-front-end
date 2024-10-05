import { GET_POSTS } from "@/api/graphql/queries";
import { GetPostsQuery } from "@/api/graphql/types";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
// import { posts } from "@/db/posts";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { useQuery } from "@apollo/client";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleUser } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState<GetPostsQuery["posts"] | null>();
  const [searchParams] = useSearchParams();

  useQuery<GetPostsQuery>(GET_POSTS, {
    variables: {
      departmentId: searchParams.get("departmentId"),
    },
    pollInterval: 20000,
    onCompleted: (data) => {
      setPosts(data.posts);
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
      toast.error("Something went wrong!");
    },
  });
  return (
    <div className="App flex min-h-screen flex-col overflow-hidden">
      <Header />

      <AuroraBackground>
        {/* Main content here */}
        <main className="flex-grow">
          <Carousel
            plugins={[
              // @ts-expect-error - i think its a type error
              Autoplay({
                delay: 10000,
              }),
            ]}
            className="mx-16 mt-8"
          >
            {/* <CarouselPrevious /> */}
            <CarouselContent>
              {posts &&
                posts?.map((post) => (
                  <CarouselItem
                    key={post?.id}
                    className="flex h-[75vh] items-center justify-center"
                  >
                    <div className="w-[1500px] space-y-10">
                      <h1 className="flex items-center gap-3 text-3xl font-semibold">
                        <span>
                          {post?.author?.role === "ADMIN" ? (
                            <FaCircleUser size={30} />
                          ) : (
                            ""
                          )}
                        </span>
                        {post?.author?.first_name} {"    "}
                      </h1>
                      <p className="text-center text-5xl font-bold leading-[1.4]">
                        {post?.content}
                      </p>
                      <time className="ml-[1200px] block text-4xl font-semibold">
                        {(post?.createdAt as unknown as string)
                          ?.slice(0, 10)
                          .replaceAll("-", "/")}
                      </time>
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
