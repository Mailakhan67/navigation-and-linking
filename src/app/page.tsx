"use client"
import {useRouter} from  "next/navigation";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const  route=useRouter();
  return (
   <>
   <Navbar/>
   <h1 className="bg-green-300 m-2 font-bold">this is a Home Page</h1><br />
   <Link href={'/navbar'}>Go to navbar page</Link> <br /> <br />
   <Link href={'/about'}>Go to About page</Link> <br /> <br />
   <Link href={'/contact'}>Go to Contact page</Link> <br /> <br />
   <Link href={'/footer'}>Go to Footer page</Link><br />
<br />
<h1 className="font-bold bg-gray-500">Navigation</h1><br />
<button onClick={()=> route.push("/about")} className="bg-green-500 font-bold h=[20px] w=[50px] m-4 p-4 rounded">Go To About page</button> <br />
<button onClick={()=> route.push("/navbar")} className="bg-gray-500 font-bold h=[20px] w=[50px] m-4 p-4 rounded">Go To Navbar page</button> <br />
<button onClick={()=> route.push("/contact")} className="bg-blue-300 font-bold h=[20px] w=[50px] m-4 p-4 rounded">Go To Contact page</button> <br />
<button onClick={()=> route.push("/footer")} className="bg-neutral-300 font-bold h=[20px] w=[50px] m-4 p-4 rounded">Go To Footer page</button> <br />
   </>
  );
}
