import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useConversation = () => {
  const params = useParams();
  const conversationId = useMemo(
    () => params?.conversationId || "",
    [params?.conversationId]
  );
  console.log(conversationId);
  const isActive = useMemo(() => !!conversationId, [conversationId]);

  return { conversationId, isActive };
};
