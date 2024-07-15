"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    router.push("/product");
    // User is logged in, render session details
    // return (
    //   <div>
    //     <section className="px-[1.2rem] md:px-[4rem] h-screen items-center bg-[#30304C] text-white flex justify-around">
    //       <div className=" flex flex-col items-center w-full md:w-fit">
    //         <h1 className="text-[32px] font-medium">Welcome back</h1>
    //         <p className="text-[#B5B5B5] text-[14px] mt-2 mb-3">
    //           Welcome back! Please enter your details.
    //         </p>
    //         <div className="flex flex-col gap-3 mt-5 text-[14px] w-full">
    //           <button
    //             onClick={() => signOut()}
    //             className="bg-[#4FA2AE] w-full p-3 rounded-xl mt-2"
    //           >
    //             Sign Out
    //           </button>
    //           <button className="bg-white text-black font-semibold w-full p-3 rounded-xl flex items-center gap-6 justify-center mt-1">
    //             <Image
    //               src="/Images/google.png"
    //               alt="#"
    //               width={25}
    //               height={25}
    //             />
    //             Logged in as {session.user.email}
    //           </button>
    //           <Link
    //             href={"/"}
    //             className="bg-[#4FA2AE] w-full p-3 rounded-xl mt-2 text-center"
    //           >
    //             Redirect to Market.
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="hidden md:inline">
    //         <Image src="/Images/login.png" alt="#" width={620} height={500} />
    //       </div>
    //     </section>
    //   </div>
    // );
  }

  // User is not logged in, render login form
  return (
    <div className="flex flex-col">
      <section className="px-[1.2rem] md:px-[4rem] h-screen items-center bg-[#30304C] text-white flex justify-around">
        <div className=" flex flex-col items-center w-full md:w-fit">
          <h1 className="text-[32px] font-medium">Welcome back</h1>
          <p className="text-[#B5B5B5] text-[14px] mt-2 mb-3">
            Welcome back! Please enter your details.
          </p>
          <div className="flex flex-col gap-3 mt-5 text-[14px] w-full">
            <button
              onClick={() => signIn()}
              className="bg-[#4FA2AE] w-full p-3 rounded-xl mt-2"
            >
              Sign in
            </button>
            <button
              onClick={() => signIn("google")}
              className="bg-white text-black font-semibold w-full p-3 rounded-xl flex items-center gap-6 justify-center mt-1"
            >
              <Image src="/Images/google.png" alt="#" width={25} height={25} />
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="hidden md:inline">
          <Image src="/Images/login.png" alt="#" width={620} height={500} />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
