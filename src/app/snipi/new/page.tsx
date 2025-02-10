"use client"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// import { redirect } from 'next/dist/server/api-utils';
// import {prisma} from "@/lib/prisma"
import { Button } from '@/components/ui/button';
import { useActionState } from "react";
import * as actions from "@/actions";


const CreateSnipi= () => {


    const [formStateData, xyz] = useActionState(actions.createSnipi, { message:"" });

    return (

        <form action={xyz} >
            <div>
                <Label>Title</Label>
                <Input type='text' name='title' id='title'></Input>
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name='code' id='code' />
            </div>

            {formStateData.message && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formStateData.message}</div>}
            <Button type='submit'>New</Button>
        </form>

    );
};

export default CreateSnipi;
