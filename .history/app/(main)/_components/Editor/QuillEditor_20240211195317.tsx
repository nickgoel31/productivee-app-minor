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
    initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    onEditorContentChange: (editor: any) => {
        onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    }
  });

  // Renders the editor instance using a React component.
  return (
    <div className="w-full h-full min-h-[500px]">
        <BlockNoteView  editor={editor} theme={"dark"} />
    </div>
  );
}

export default QuillEditor