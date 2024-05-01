import taskImage from "@/assets/images/taskManagement.gif"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <section className="">
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex p-6 mr-0 md:mr-5 lg:mr-10 md:p-0 flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <div className="text-3xl font-bold leading-none sm:text-4xl">
            <h4>Wellcome to</h4>
            <h1 className="text-6xl text-violet-600">Task Hub</h1>
          </div>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Whether you&apos;re just getting started or looking to switch to a faster, more flexible ITSM solution, This Service Management has the features you need to unlock your teams.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href={'/login'} className="px-8 text-center w-full py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50 hover:bg-white hover:text-black transition-all duration-300 border-violet-600 border">Login</Link>
            <Link href={'/projects'} className="px-8 text-center w-full py-3 text-lg font-semibold border rounded border-gray-800">Projects</Link>
          </div>
        </div>
        <div className="flex p-6 md:p-0 items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl">
          <Image src={taskImage} alt={"task management image"} className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
