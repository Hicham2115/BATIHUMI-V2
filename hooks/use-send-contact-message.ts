import { useMutation } from "@tanstack/react-query";

import { api } from "@/lib/axios";
import type { ContactInput } from "@/lib/validations/contact";

export function useSendContactMessage() {
  return useMutation({
    mutationFn: async (data: ContactInput) =>
      (await api.post("/contact", data)).data,
  });
}
