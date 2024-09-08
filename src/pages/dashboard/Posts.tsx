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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Posts() {
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
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="border border-slate-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="post-content">Post</Label>
              <Textarea id="post-content" className="border border-slate-400" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
