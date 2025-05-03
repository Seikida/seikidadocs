import Link from "next/link";
import Image from "next/image";

import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <Image src="/logo.svg" alt="Tsubachan Editor" width={211/2} height={157/2} />
        <div>Click　<Link href="/documents/123"><span className="text-blue-500 underline">here</span></Link>　to go to document id</div>
      </div>
    </div>
  )
}

export default Home;