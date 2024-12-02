import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GoogleOAuthProvider clientId="194880694340-f50rufcebdboker9nafm0mdr7jum4mmv.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster/>
      </GoogleOAuthProvider>
    </div>
  );
}
