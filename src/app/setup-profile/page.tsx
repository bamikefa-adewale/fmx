// "use client";

// import * as React from "react";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { completeOnboarding } from "./_actions";

// const SetupPage = () => {
//   const [error, setError] = React.useState("");
//   const { user } = useUser();
//   const router = useRouter();

//   const handleSubmit = async (formData: FormData) => {
//     const res = await completeOnboarding(formData);
//     if (res?.message) {
//       // Reloads the user's data from the Clerk API
//       await user?.reload();
//       router.push("/");
//     }
//     if (res?.error) {
//       setError(res?.error);
//     }
//   };
//   return (
//     <>
//       <h1>Welcome</h1>
//       <form action={handleSubmit}>
//         <div>
//           <label>Application Type</label>
//           <p>Describe the type of your application.</p>
//           <input type="text" name="applicationType" required />
//         </div>
//         {error && <p className="text-red-600">Error: {error}</p>}
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };
// export default SetupPage;
