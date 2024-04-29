import { Inter } from "next/font/google";
import "./globals.css";

import ToastProvider from "@/providers/toast-provider";
import Provider from "@/components/Providers/Provider";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Cacoona Ecommerce",
  description: "Cacoona products and Chesper book.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}> 
      <Provider>
          <ToastProvider/>
             {children}
             </Provider>
          
         </body>
    </html>
  );
}
