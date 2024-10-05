import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GetDepartmentForDashboardQuery } from "@/api/graphql/types";
import { useQuery } from "@apollo/client";
import { GET_DEPARTMENT_FOR_DASHBOARD } from "@/api/graphql/queries";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Department() {
  const [departments, setDepartments] =
    useState<GetDepartmentForDashboardQuery["departments"]>();

  useQuery<GetDepartmentForDashboardQuery>(GET_DEPARTMENT_FOR_DASHBOARD, {
    onCompleted: (data) => {
      console.log(data);
      setDepartments(data.departments);
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
          <Button>Add New Department</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Department</DialogTitle>
            <DialogDescription>
              fill-full this form to add a new Department
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="department">Department Name</Label>
              <Input
                id="department"
                required
                className="border border-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chef-department">Chef Department </Label>
              <Input
                id="chef-department"
                required
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Departments</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Chef</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments?.map((department) => (
                <TableRow key={department?.id}>
                  <TableCell>{department?.id}</TableCell>
                  <TableCell>{department?.name}</TableCell>
                  <TableCell>{department?.chef?.first_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
