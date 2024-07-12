export { default } from "next-auth/middleware";

export const config = {
  // specify the routes you want to protect, including dynamic segments
  matcher: ["/orders/:path*", "/cart", "/book"],
};
