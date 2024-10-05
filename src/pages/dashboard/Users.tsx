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
import { GET_USERS } from "@/api/graphql/queries";
import {
  CREATE_NEW_USER,
  INVALIDATE_USER,
  VALIDATE_USER,
} from "@/api/graphql/mutations";
import toast from "react-hot-toast";
import {
  CreateUserMutation,
  GetUsersQuery,
  InvalidateUserMutation,
  ValidateUserMutation,
} from "@/api/graphql/types";

export default function Users() {
  const [users, setUsers] = useState<GetUsersQuery["users"] | null>();
  const [newUser, setNewUser] = useState({
    first_name: "",
    family_name: "",
    email: "",
    password: "",
  });

  useQuery<GetUsersQuery>(GET_USERS, {
    onCompleted: (data) => {
      console.log(data);
      setUsers(data.users);
    },
    onError: (error) => {
      console.error(error);
      toast.error("failed to fetch users");
    },
  });

  const [validateUser, { loading: validating }] =
    useMutation<ValidateUserMutation>(VALIDATE_USER, {
      onCompleted: (data) => {
        console.log(data);
        const UpdatedUserId = data?.validateUser?.id;
        const updatedUsers = users?.map((user) => {
          if (user && user.id === UpdatedUserId) {
            return {
              ...user,
              validated: true,
            };
          }
          return user;
        });
        setUsers(updatedUsers);
        toast.success("User Validated");
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    });

  const [createNewUser, { loading }] = useMutation<CreateUserMutation>(
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
        // @ts-expect-error idk why this is happening (i actually do just being lazy)
        setUsers((prev) => [...prev!, data.createUser]);
        toast.success(`User created`);
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    },
  );
  const [invalidateUser, { loading: invalidating }] =
    useMutation<InvalidateUserMutation>(INVALIDATE_USER, {
      onCompleted: (data) => {
        console.log(data);
        const UpdatedUserId = data?.invalidateUser?.id;
        const updatedUsers = users?.map((user) => {
          if (user && user.id === UpdatedUserId) {
            return {
              ...user,
              validated: false,
            };
          }
          return user;
        });
        setUsers(updatedUsers);
        toast.success("User InValidated");
      },
      onError: (error) => {
        console.error(error);
        toast.error(error.message);
      },
    });

  function validateOrInvalidateUser(id: string, validated: boolean) {
    if (validated) {
      validateUser({ variables: { id } });
    } else {
      invalidateUser({ variables: { id } });
    }
  }

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
                  <TableRow key={user?.id}>
                    <TableCell>{user?.id}</TableCell>
                    <TableCell>
                      <Checkbox
                        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                        checked={user?.validated!}
                        disabled={validating || invalidating}
                        onCheckedChange={() =>
                          validateOrInvalidateUser(
                            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                            user?.id!,
                            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                            !user?.validated!,
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>{user?.first_name}</TableCell>
                    <TableCell>{user?.family_name}</TableCell>
                    <TableCell>{user?.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
