import { useMutation } from "convex/react";
import { useState } from "react";

export const useMutationState = (mutationToRun: any) => {
  const [pending, setPending] = useState(false);
  const mutationFn = useMutation(mutationToRun);

  const mutate = async (payload: any) => {
    setPending(true);
    return await mutationFn(payload)
      .then((res) => res)
      .catch((err) => {
        throw err;
      })
      .finally(() => setPending(false));
  };

  return { mutate, pending };
};
