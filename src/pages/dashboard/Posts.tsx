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
  GET_DEPARTMENTS,
  GET_POSTS_FOR_DASHBOARD,
} from "@/api/graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import {
  CREATE_POST,
  INVALIDATE_POST,
  VALIDATE_POST,
} from "@/api/graphql/mutations";
import toast from "react-hot-toast";
import {
  CreatePostMutation,
  GetDepartmentsQuery,
  GetPostsForDashboardQuery,
  InvalidatePostMutation,
  Role,
  ValidatePostMutation,
} from "@/api/graphql/types";
import { useUser } from "@/store/useUser";
import RoleChip from "@/components/ui/RoleChip";

export default function Posts() {
  const [posts, setPosts] = useState<
    GetPostsForDashboardQuery["posts"] | null
  >();
  const [newPostContent, setNewPostContent] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departments, setDepartments] = useState<
    GetDepartmentsQuery["departments"] | null
  >();
  const { user } = useUser();
  const modalButtonRef = useRef<HTMLButtonElement>(null);

  useQuery<GetPostsForDashboardQuery>(GET_POSTS_FOR_DASHBOARD, {
    variables: user?.role === "USER" ? { authorId: user.id } : undefined,
    pollInterval: 20000,
    onCompleted: (data) => {
      setPosts(data.posts);
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
      toast.error("failed to fetch posts");
    },
  });

  useQuery<GetDepartmentsQuery>(GET_DEPARTMENTS, {
    onCompleted: (data) => {
      setDepartments(data.departments);
    },
    onError: (error) => {
      console.error(error);
      toast.error("failed to fetch departments");
    },
  });

  const [createPost, { loading }] = useMutation<CreatePostMutation>(
    CREATE_POST,
    {
      variables: {
        content: newPostContent,
        department: selectedDepartment,
        image: "   ",
      },
      onCompleted: (data) => {
        console.log(data);
        // @ts-expect-error idk why this is happening
        setPosts((prev) => [...prev!, data.createPost]);
        toast.success("Post created!");
        modalButtonRef.current?.click();
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    },
  );

  const [validatePost, { loading: validating }] =
    useMutation<ValidatePostMutation>(VALIDATE_POST, {
      onCompleted: (data) => {
        console.log(data);
        const UpdatedPostId = data?.validatePost?.id;
        const updatedPosts = posts?.map((post) => {
          if (post && post.id === UpdatedPostId) {
            return {
              ...post,
              validated: true,
            };
          }
          return post;
        });
        setPosts(updatedPosts);
        toast.success("Post Validated");
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    });

  const [invalidatePost, { loading: invalidating }] =
    useMutation<InvalidatePostMutation>(INVALIDATE_POST, {
      onCompleted: (data) => {
        console.log(data);
        const UpdatedPostId = data?.invalidatePost?.id;
        const updatedPosts = posts?.map((post) => {
          if (post && post.id === UpdatedPostId) {
            return {
              ...post,
              validated: false,
            };
          }
          return post;
        });
        setPosts(updatedPosts);
        toast.success("Post Invalidated");
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    });

  const validateOrInvalidatePost = (id: string, validated: boolean) => {
    if (validated) {
      validatePost({ variables: { id } });
    } else {
      invalidatePost({ variables: { id } });
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          ref={modalButtonRef}
          asChild
          className="absolute right-5 top-5"
        >
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
            <div>
              <select
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  console.log(e.target.value);
                }}
                name="department"
                id="department"
              >
                <option value="" selected disabled>
                  Select a department
                </option>
                {departments?.map((department) => (
                  <option key={department?.id} value={department?.id}>
                    {department?.name}
                  </option>
                ))}
              </select>
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
                <TableHead>Department Name</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Author</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts?.map((post) => (
                <TableRow key={post?.id}>
                  <TableCell>{post?.id}</TableCell>
                  <TableCell>
                    <Checkbox
                      checked={post?.validated || false}
                      disabled={validating || invalidating}
                      onCheckedChange={() =>
                        validateOrInvalidatePost(
                          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                          post?.id!,
                          !post?.validated || false,
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>{post?.department?.name}</TableCell>
                  <TableCell>{post?.content}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    {post?.author?.family_name}{" "}
                    <RoleChip role={post?.author?.role as Role} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
