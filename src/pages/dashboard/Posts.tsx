import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GET_POSTS_FOR_DASHBOARD,
  GetPostsForDashboardType,
} from "@/api/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ApolloResponse } from "@/types";
import { useState } from "react";
import { CREATE_POST, CreatePostType } from "@/api/graphql/mutations";
import toast from "react-hot-toast";

export default function Posts() {
  const [posts, setPosts] =
    useState<ApolloResponse<GetPostsForDashboardType> | null>();
  const [newPostContent, setNewPostContent] = useState("");
  useQuery<GetPostsForDashboardType>(GET_POSTS_FOR_DASHBOARD, {
    pollInterval: 20000,
    onCompleted: (data) => {
      setPosts(data.posts);
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const [createPost, { loading }] = useMutation<CreatePostType>(CREATE_POST, {
    variables: {
      content: newPostContent,
    },
    onCompleted: (data) => {
      console.log(data);
      // @ts-expect-error idk
      setPosts((prev) => [...prev!, data.createPost]);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="absolute right-5 top-5">
          <Button>Add New Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Post</DialogTitle>
            <DialogDescription>
              fill-full this form to add a new post
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="post-content">Post</Label>
              <Textarea
                id="post-content"
                onChange={(e) => setNewPostContent(e.target.value)}
                value={newPostContent}
                className="border border-slate-400"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              onClick={() => createPost()}
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* main content */}
      <div className="flex w-[80dvw] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Posts</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Verified</TableHead>
                {/* <TableHead>Department</TableHead> */}
                <TableHead>Content</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts?.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>
                    <Checkbox
                      onChange={() => (post.validated = !post.validated)}
                    />
                  </TableCell>
                  {/* <TableCell>{post.department}</TableCell> */}
                  <TableCell>{post.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
