// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { sessionClaims } = await auth();
//   const onboardingComplete = sessionClaims?.metadata?.onboardingComplete;

//   // Check if onboarding is incomplete and user is not on signup/onboarding page
//   if (
//     onboardingComplete !== true &&
//     !window.location.pathname.includes("/CartPage")
//     // !window.location.pathname.includes("/signup")
//   ) {
//     redirect("/onboarding"); // Redirect to onboarding page if incomplete
//   }

//   return <>{children}</>;
// }
