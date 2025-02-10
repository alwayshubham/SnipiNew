"use server"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache";

export const saveSnipi = async (id: number, code: string) => {
    await prisma.snipi.update({
        where: {
            id
        },
        data: {
            code
        }
    });
 
    revalidatePath(`/snipi/${id}`);
    redirect(`/snipi/${id}`);
}


export const deleteSnipi = async (id: number) => {
    await prisma.snipi.delete({
        where: { id }
    }); 
    revalidatePath("/");
    redirect("/");
}

export async function createSnipi(prevState: { message: string }, formData: FormData) {

    try {
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 4) {
            return { message: "Title is required and must be longer" }
        }
        if (typeof code !== "string" || code.length < 8) {
            return { message: "Code is required and must be longer" }
        }

        await prisma.snipi.create({
            data: {
                title,
                code
            }
        });

        // throw new Error("Some Internal server error");

        revalidatePath("/");
        
    } catch (error: unknown) {
        if(error instanceof Error){
            return { message: error.message}
        }else{
            return {message:"Some internal server error"}
        }
    }

    redirect("/");
}