export type Role = "ADMIN" | "CHEF" | "USER";
type RoleChipProps = {
  role: Role;
};

export default function RoleChip({ role }: RoleChipProps) {
  const sharedStyles = "rounded-full px-2 py-1 text-xs font-semibold";
  switch (role) {
    case "ADMIN":
      return (
        <span
          className={`${sharedStyles} block w-[80px] border border-red-400 bg-red-500/50 text-center text-white`}
        >
          ADMIN
        </span>
      );
    case "CHEF":
      return (
        <span
          className={`${sharedStyles} block w-[80px] border border-green-400 bg-green-500/50 text-center text-white`}
        >
          CHEF
        </span>
      );
    case "USER":
      return (
        <span
          className={`${sharedStyles} block w-[80px] border border-blue-400 bg-blue-500/50 text-center text-white`}
        >
          USER
        </span>
      );
    default:
      return (
        <span
          className={`${sharedStyles} block w-[80px] border border-gray-400 bg-gray-500/50 text-center text-white`}
        >
          ???
        </span>
      );
  }
}
