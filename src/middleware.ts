import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // Add your middleware logic here if needed
  // For example, logging the request URL:
  console.log("Middleware running for:", req.nextUrl.pathname);
});

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
