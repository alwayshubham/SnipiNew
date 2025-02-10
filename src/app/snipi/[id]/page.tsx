import React from 'react'
import { prisma } from "@/lib/prisma";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as actions from "@/actions";
import { notFound } from "next/navigation";

type snipiDetailprops = {
  params: Promise<{ id: string }>;
};

const snipiDetailpage: React.FC<snipiDetailprops> = async ({ params,

}) => {

  const id = parseInt((await params).id);

  const snipi = await prisma.snipi.findUnique({
    where: {
      id,
    },
  });

  if (!snipi) notFound();

  const deleteSnippetActions = actions.deleteSnipi.bind(null, snipi.id);


  return (

    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className='font-bold text-xl'>{snipi.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snipi/${snipi.id}/edit`}><Button>Edit</Button>
          </Link>
          <form action={deleteSnippetActions}>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded border-gray-200">
        <code>{snipi.code}</code>
      </pre>
    </div>

  )
}
export default snipiDetailpage;

export const generateStaticParams = async () => {
  const snipis = await prisma.snipi.findMany();

  return snipis.map((snipi) => {
    return { id:snipi.id.toString() }
  })
}