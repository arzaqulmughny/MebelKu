"use client";
/* eslint-disable react/no-children-prop */
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import useForm from "@/src/components/register/useForm";
import Link from "next/link";

export default function Page() {
  const form = useForm();
 
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
            <h2 className="text-sm text-(--muted-light)">Daftar Akun</h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-y-6">
          <form.Field
            name="email"
            children={(field) => (
              <Input
                label="Email"
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
            name="name"
            children={(field) => (
              <Input
                label="Nama"
                placeholder="Masukkan nama"
                type="text"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                errorMessage={field.state.meta.errors.join(", ")}
              />
            )}
          />

          <form.Field
            name="username"
            children={(field) => (
              <Input
                label="Username"
                placeholder="Masukkan username"
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

          <form.Field
            name="confirm_password"
            children={(field) => (
              <Input
                label="Ulangi Password"
                placeholder="Masukkan ulang password"
                type="password"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                errorMessage={field.state.meta.errors.join(", ")}
              />
            )}
          />

          <Button type="submit" disabled={form.state.isSubmitting}>
            Daftar
          </Button>

          <span className="text-(--muted-light) text-sm">
            Sudah memiliki akun?{" "}
            <Link href="/login" className="text-(--primary) font-bold">
              Masuk
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}
