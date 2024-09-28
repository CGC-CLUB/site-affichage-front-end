import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS, GetUsersType } from "@/api/graphql/queries";
import { ApolloResponse } from "@/types";

export default function Users() {
  const [users, setUsers] = useState<ApolloResponse<GetUsersType> | null>();
  useQuery<GetUsersType>(GET_USERS, {
    onCompleted: (data) => {
      console.log(data);
      setUsers(data.users);
    },
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild className="absolute right-5 top-5">
          <Button>Add New User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              fill-full this form to add a new user
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input id="last_name" className="border border-slate-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input id="last_name" className="border border-slate-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" className="border border-slate-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Password">Password</Label>
              <Input
                id="Password"
                type="password"
                className="border border-slate-400"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* main content */}
      <div className="flex w-[80dvw] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Users</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Family Name</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users &&
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      <Checkbox
                        checked={user.validated}
                        onChange={() => (user.validated = !user.validated)}
                      />
                    </TableCell>
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.family_name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
