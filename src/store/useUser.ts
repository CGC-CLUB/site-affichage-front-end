import { ME, MeType } from "@/api/graphql/queries";
import { useQuery } from "@apollo/client";
import { atom, useAtom } from "jotai";

export type CurrentUser = {
  id: string;
  first_name: string;
  family_name: string;
  email: string;
} | null;

export const userAtom = atom<CurrentUser>(null);

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const { data, loading, error } = useQuery<MeType>(ME, {
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
