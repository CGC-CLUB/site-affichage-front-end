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
import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS, GetUsersType } from "@/api/graphql/queries";
import { ApolloResponse } from "@/types";
import { CREATE_NEW_USER, CreateNewUserType } from "@/api/graphql/mutations";
import toast from "react-hot-toast";

export default function Users() {
  const [users, setUsers] = useState<ApolloResponse<GetUsersType> | null>();
  const [newUser, setNewUser] = useState({
    first_name: "",
    family_name: "",
    email: "",
    password: "",
  });

  useQuery<GetUsersType>(GET_USERS, {
    onCompleted: (data) => {
      console.log(data);
      setUsers(data.users);
    },
  });

  const [createNewUser, { loading }] = useMutation<CreateNewUserType>(
    CREATE_NEW_USER,
    {
      variables: {
        first_name: newUser.first_name,
        family_name: newUser.family_name,
        email: newUser.email,
        password: newUser.password,
      },
      onCompleted: (data) => {
        console.log(data);
        setUsers((prev) => [...prev!, data.createUser]);
        toast.success(`User created`);
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    },
  );

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
              <Input
                id="last_name"
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    first_name: e.target.value,
                  }))
                }
                className="border border-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                onChange={(e) =>
                  setNewUser((prev) => ({
                    ...prev,
                    family_name: e.target.value,
                  }))
                }
                className="border border-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onChange={(e) =>
                  setNewUser((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border border-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Password">Password</Label>
              <Input
                id="Password"
                type="password"
                className="border border-slate-400"
                onChange={(e) =>
                  setNewUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button disabled={loading} onClick={() => createNewUser()}>
              Add
            </Button>
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
