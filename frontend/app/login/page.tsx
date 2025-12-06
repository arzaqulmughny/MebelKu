"use client";

/* eslint-disable react/no-children-prop */
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { formatResponseError } from "@/src/utils/response";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Page() {
  const router = useRouter();
  const loginMutation = useMutation({
    mutationFn: (values: LoginFormValues) => axios.post("http://localhost:8000/api/login", values),
    onSuccess: (response) => {
      const accessToken = response.data.access_token;

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
      }
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmitAsync: async ({ value }) => {
        try {
          await loginMutation.mutateAsync(value);

          const accessToken = localStorage.getItem("access_token");
          if (accessToken && accessToken !== "") {
            router.push("/");
          }
        } catch (error) {
          const axiosError = error as {
            response?: {
              data?: { errors?: Record<keyof LoginFormValues, string[]> };
            };
          };
          const errorValidations = axiosError?.response?.data?.errors as Record<
            keyof LoginFormValues,
            string[]
          >;

          return {
            fields: formatResponseError(errorValidations),
          };
        }
      },
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        form.handleSubmit();
      }}
      className="flex justify-center border h-screen items-center"
    >
      <div className="flex flex-col items-center gap-y-10 w-full max-w-md">
        <div className="flex flex-col items-center gap-y-5">
          <div className="bg-(--primary)/20 p-4 text-(--primary) rounded-xl">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3-1m3 1v5.25c0 .621-.504 1.125-1.125 1.125h-2.25c-.621 0-1.125-.504-1.125-1.125V9.75M7.5 9.75h4.5M12 9.75l3-1.091M9.75 3l3 1.091m0 0l3-1.091M3.75 3l3 1.091"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-1">
            <h1 className="text-2xl font-bold text-(--text-light)">MebelKu</h1>
            <h2 className="text-sm text-(--muted-light)">
              Selamat Datang Kembali
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-y-6">
          <form.Field
            name="email"
            children={(field) => (
              <Input
                label="Email / Username"
                placeholder="Masukkan email atau username"
                type="text"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                errorMessage={field.state.meta.errors.join(", ")}
              />
            )}
          />

          <form.Field
            name="password"
            children={(field) => (
              <Input
                label="Password"
                placeholder="Masukkan password"
                type="password"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                errorMessage={field.state.meta.errors.join(", ")}
              />
            )}
          />

          <Button type="submit" disabled={form.state.isSubmitting}>
            Login
          </Button>
          <span className="text-(--muted-light) text-sm">
            Belum punya akun?{" "}
            <Link href="/register" className="text-(--primary) font-bold">
              Daftar disini
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}
