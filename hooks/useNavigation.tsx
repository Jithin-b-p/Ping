import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { MessageSquare, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathName = usePathname();
  const reqsCount = useQuery(api.requests.count);

  const paths = useMemo(
    () => [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <MessageSquare />,
        active: pathName.startsWith("/conversations"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <User />,
        active: pathName.startsWith("/friends"),
        count: reqsCount,
      },
    ],
    [pathName, reqsCount]
  );

  return paths;
};
