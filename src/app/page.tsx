
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {

  const snipis = await prisma.snipi.findMany();


  return (
    <div>
      <h1 className="font-bold text-4xl">HOME</h1>
      <div className="flex items-center  justify-center">
        <h1>SNIPPETS</h1>
        <Link href={"snipi/new"}><Button>New</Button></Link>
        <div>
        <Link rel="stylesheet" href="/login" className="mt-14">
          LogIN
        </Link>
        
        <Link rel="stylesheet" href="/register" className="m-14">
         NEW SignUP
        </Link>
        </div>
        
      </div>
      {snipis.map((snipi) => (
        <div key={snipi.id} className="flex items-center justify-between bg-gray-200 p-2">
          <h1>{snipi.title}</h1>
          <Link href={`/snipi/${snipi.id}`}>
          <Button variant={'link'}>view</Button>
          </Link>
        </div>                            
      ))}
    </div>
  );
}

