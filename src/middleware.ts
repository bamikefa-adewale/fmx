import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextRequest, NextResponse } from "next/server";

// // Define the onboarding and public routes
// const isOnboardingRoute = createRouteMatcher(["/setup-profile"]);
// const isPublicRoute = createRouteMatcher(["/"]);

// export default clerkMiddleware(async (auth, req: NextRequest) => {
//   const { userId, sessionClaims, redirectToSignIn } = await auth();

//   // Allow users to access the onboarding page freely
//   if (userId && isOnboardingRoute(req)) {
//     return NextResponse.next();
//   }

//   // Redirect unauthenticated users to sign-in
//   if (!userId && !isPublicRoute(req)) {
//     return redirectToSignIn({ returnBackUrl: req.url });
//   }

//   // Redirect users who haven't completed onboarding
//   if (userId && !sessionClaims?.metadata?.onboardingComplete) {
//     const onboardingUrl = new URL("/setup-profile", req.url); // Update to your onboarding route
//     return NextResponse.redirect(onboardingUrl);
//   }

//   // Allow authenticated users to access protected routes
//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// };
