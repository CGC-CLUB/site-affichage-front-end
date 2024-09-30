import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, type LoginType } from "@/api/graphql/mutations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/store/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { user, setUser } = useUser();

  if (user && "id" in user) {
    navigation("/dashboard/posts");
  }

  const [mutateFunction, { loading }] = useMutation<LoginType>(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: (data) => {
      console.log(data);
      setUser(data.login);
      toast.success("Login successfully");
      navigation("/dashboard/posts");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Please check your email or password");
    },
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm space-y-6 rounded-lg border border-gray-300 bg-white p-8 shadow-xl">
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="font-medium text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mt-1 w-full border border-gray-300 px-4 py-2 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <Label htmlFor="password" className="font-medium text-gray-700">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-1 w-full border border-gray-300 px-4 py-2 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
        <Button
          type="button"
          onClick={() => mutateFunction()}
          disabled={loading}
          className="mt-6 w-full rounded-lg py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Login
        </Button>
      </form>
      {JSON.stringify(user)}
    </div>
  );
}
