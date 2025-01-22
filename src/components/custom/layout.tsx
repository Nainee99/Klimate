import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gradient-to-br from-background to-muted w-screen min-h-screen">
      <Header />
      <main className="flex-grow w-full px-4 py-8 ">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
        <div className="max-w-7xl mx-auto w-full px-4 text-center text-gray-200">
          <p className="text-sm font-medium">
            Made with by{" "}
            <a href="https://Nainee.com" className="text-primary">
              Nainee
            </a>
          </p>
          <p className="text-xs mt-2 text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
