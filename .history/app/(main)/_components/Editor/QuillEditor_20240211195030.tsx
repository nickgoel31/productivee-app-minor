"use client"

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, ReactSlashMenuItem, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

interface BlockNoteEditorOptions {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean
}


const QuillEditor = ({editable,initialContent, onChange}: BlockNoteEditorOptions) => {
    // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent
  });

  // Renders the editor instance using a React component.
  return (
    <div className="w-full h-full min-h-[500px]">
        <BlockNoteView  editor={editor} theme={"dark"} />
    </div>
  );
}

export default QuillEditor