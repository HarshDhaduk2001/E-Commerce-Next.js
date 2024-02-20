import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Forgot-Password",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
