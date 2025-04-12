// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/sign-out"], // 👈 add "/sign-out"
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
