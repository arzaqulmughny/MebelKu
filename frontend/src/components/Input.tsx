"use client";

import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  type: string;
  forgotPasswordUrl?: string;
  errorMessage?: string;
}

export default function Input({
  label,
  placeholder,
  type,
  forgotPasswordUrl,
  errorMessage,
  ...restProp
}: InputProps) {
  const [typeState, setTypeState] = useState(type);

  return (
    <label className="flex flex-col gap-y-2 w-full">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-(--text-light)">{label}</span>
        {forgotPasswordUrl && (
          <a
            href={forgotPasswordUrl}
            className="text-xs text-(--primary) font-bold"
          >
            Lupa Password?
          </a>
        )}
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="relative w-full flex items-center">
          <input
            type={typeState}
            placeholder={placeholder}
            {...restProp}
            className="placeholder:text-(--muted-light) border border-(--border-light) placeholder:text-sm py-2 px-3 text-(--text-light) text-sm w-full"
          />

          {type === "password" && (
            <button
              type="button"
              tabIndex={-1}
              className="text-sm text-(--muted-light) font-bold absolute right-4 cursor-pointer hover:brightness-90"
              onClick={() =>
                setTypeState(typeState === "password" ? "text" : "password")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5"
              >
                <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
              </svg>
            </button>
          )}
        </div>

        <span className="text-xs text-red-500">{errorMessage}</span>
      </div>
    </label>
  );
}
