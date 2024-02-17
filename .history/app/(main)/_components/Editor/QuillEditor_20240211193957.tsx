"use client"

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";


const QuillEditor = () => {
    // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote({});

  // Renders the editor instance using a React component.
  return (
    <div className="w-full">
        <BlockNoteView editor={editor} theme={"dark"}/>
    </div>
  );
}

export default QuillEditor