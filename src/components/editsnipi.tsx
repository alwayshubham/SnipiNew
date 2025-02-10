"use client"
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { snipi } from '@prisma/client';
import { Button } from './ui/button';
import { saveSnipi } from "@/actions";


const Editsnipi = ({ snipi }: { snipi: snipi }) => {
    const [code, setCode] = useState(snipi.code);
    // async function saveSnipi(params:type) {

    // }

    const changeEvenHandler = (value:string = "") => {
        setCode(value);
    }

    const saveSnippetAction = saveSnipi.bind(null, snipi.id, code);


    return (
        <div className="flex flex-col gap-4">
            <form action={saveSnippetAction} className="flex items-center justify-between">
                <h1 className="font-bold text-xl">Your code editors</h1>
                <Button type="submit">Save</Button>
            </form>

            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue={code}
                onChange={changeEvenHandler}
            />
        </div>
    )
}

export default Editsnipi;
