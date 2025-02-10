import React from 'react'
import Editsnipi from '@/components/editsnipi';
import { prisma } from "@/lib/prisma";

const editsnipipage = async({params}:{params:Promise<{id:string}>}) => {

    const id = parseInt((await params).id);
    const snipi = await prisma.snipi.findUnique({
        where: {
          id,
        },
      });
    
      if (!snipi) return <h1> not found</h1>;
  return <Editsnipi snipi = {snipi}/>;
};

export default editsnipipage;