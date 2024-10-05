import { ME } from "@/api/graphql/queries";
import { MeQuery } from "@/api/graphql/types";
import { useQuery } from "@apollo/client";
import { atom, useAtom } from "jotai";

export type CurrentUser = {
  id: string;
  first_name: string;
  family_name: string;
  email: string;
} | null;

export const userAtom = atom<MeQuery["me"] | null>(null);

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const { data, loading, error } = useQuery<MeQuery>(ME, {
    onCompleted: (data) => {
      console.log(data);
      setUser(data.me);
    },
  });

  if (data && data.me) {
    setUser(data.me);
    console.log(data);
  }

  return { user, loading, error, setUser };
};
