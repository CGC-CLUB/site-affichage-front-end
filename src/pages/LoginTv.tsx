import { LOGIN_AS_TV } from "@/api/graphql/mutations";
import { LoginTvMutation } from "@/api/graphql/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export default function LoginTv() {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const [login] = useMutation<LoginTvMutation>(LOGIN_AS_TV, {
    variables: {
      name: loginInfo.name,
      password: loginInfo.password,
    },
    onCompleted: (data) => {
      console.log(data);
      navigate(`/?departmentId=${data.loginTv?.department?.id}`);
    },
    onError: () => {
      toast.error("Invalid Credentials");
    },
  });

  return (
    <div className="flex h-dvh items-center justify-center">
      <button
        className="fixed left-4 top-4 flex items-center gap-3"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack size={30} />
        <span className="text-2xl">Back</span>
      </button>
      <div className="rounded-xl border border-slate-400 p-[30px]">
        <form className="w-[300px] space-y-6">
          <h1 className="text-center text-3xl font-semibold">Login as a TV</h1>
          <div className="mb-4 space-y-2">
            <Label>Name</Label>
            <Input
              value={loginInfo.name}
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Department Name"
            />
          </div>
          <div className="mb-4 space-y-2">
            <Label>Password</Label>
            <Input
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
              placeholder="Password"
            />
          </div>
          <Button onClick={() => login()} type="button" className="w-full">
            Login as TV
          </Button>
        </form>
      </div>
    </div>
  );
}
