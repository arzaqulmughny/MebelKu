import { useMutation } from "@tanstack/react-query";
import { useForm as useTanstackForm } from "@tanstack/react-form";
import axios from "axios";
import { formatResponseError } from "@/src/utils/response";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type RegisterFormValues = {
  email: string;
  username: string;
  name: string;
  password: string;
  confirm_password: string;
};

export default function useForm() {
  const router = useRouter();
  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormValues) =>
      axios.post("http://localhost:8000/api/register", data),
  });

  const form = useTanstackForm({
    defaultValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    validators: {
      onSubmitAsync: async ({ value }) => {
        try {
          await registerMutation.mutateAsync(value);

          Swal.fire({
            title: "Berhasil mendaftarkan akun!",
            text: "Akun berhasil didaftarkan, silahkan login ke akun.",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          router.push("/login");
        } catch (error: unknown) {
          const axiosError = error as {
            response?: {
              data?: { errors?: Record<keyof RegisterFormValues, string[]> };
            };
          };
          const errorValidations = axiosError?.response?.data?.errors as Record<
            keyof RegisterFormValues,
            string[]
          >;

          return {
            fields: formatResponseError(errorValidations),
          };
        }
      },
    },
  });

  return form;
}
