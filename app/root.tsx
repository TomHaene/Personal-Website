import {Links,Meta,Outlet,Scripts,ScrollRestoration,} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NavDrawer from "./components/NavDrawer";
import { useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap" }
];

export function Layout({ children }: { children: React.ReactNode }) {


  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
      setDrawerOpen(!isDrawerOpen);
  };

  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-std-brown">
        <NavBar toggleDrawer={toggleDrawer}/>
        <NavDrawer toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
