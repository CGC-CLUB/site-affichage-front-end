import { GET_POSTS } from "@/api/graphql/queries";
import { GetPostsQuery } from "@/api/graphql/types";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { useQuery } from "@apollo/client";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom";
import { BsQuestionLg } from "react-icons/bs";

export default function Home() {
  const [posts, setPosts] = useState<GetPostsQuery["posts"] | null>();
  const [searchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imageUrl =
    "https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-1/463868746_122163663236094841_3764567081281187302_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGHVqZN47SERF0ktPlYMlCaPsfPbk8mtJc-x89uTya0l2EDBpTqeCDavCgVxijb7oW0eGxpbhmvN_rVTg5Fa5IH&_nc_ohc=_iiAdoey0XQQ7kNvgF9_dao&_nc_zt=24&_nc_ht=scontent.fcfk1-1.fna&_nc_gid=AWyTHjGTeM6ipMyBLP1KGHk&oh=00_AYCFvRxY3sNNbLgoEq9OhFW59x8Sm4rjJ0Xz8ihJuqWuyA&oe=6725B0C5";

  useQuery<GetPostsQuery>(GET_POSTS, {
    variables: {
      departmentId: searchParams.get("departmentId") || null,
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
      <div className="fixed left-4 top-4 z-50 flex items-center gap-3">
        <img
          src={imageUrl}
          width={40}
          className="rounded-full"
          alt="background"
        />
        <span className="text-2xl font-semibold">Edo-Board</span>
      </div>
      <AuroraBackground>
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
                        {post?.author?.first_name}
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
          </Carousel>
        </main>
      </AuroraBackground>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-black p-2"
      >
        <BsQuestionLg size={25} />
        {isMenuOpen && (
          <div className="absolute bottom-full right-10 my-4 flex w-[200px] flex-col rounded-xl border border-black/30 *:py-3">
            <Link
              className="border border-b-black/30 duration-500 hover:text-purple-700"
              to="/login"
            >
              Login As User
            </Link>
            <Link
              className="border border-b-black/30 duration-500 hover:text-purple-700"
              to="/login-tv"
            >
              Login As TV
            </Link>
            <Link
              className="duration-500 hover:text-purple-700"
              to="/dashboard/posts"
            >
              Dashboard
            </Link>
          </div>
        )}
      </button>
    </div>
  );
}
