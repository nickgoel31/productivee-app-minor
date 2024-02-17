"use client"

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, ReactSlashMenuItem, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

export type BlockNoteEditorOptions = Partial<{
    editable: boolean;
    initialContent: PartialBlock[];
    editorDOMAttributes: Record<string, string>;
    onEditorReady: (editor: BlockNoteEditor) => void;
    onEditorContentChange: (editor: BlockNoteEditor) => void;
    onTextCursorPositionChange: (editor: BlockNoteEditor) => void;
    slashMenuItems: ReactSlashMenuItem[];
    defaultStyles: boolean;
    uploadFile: (file: File) => Promise<string>
  }>;


const QuillEditor = () => {
    // Creates a new editor instance.
  const editor: BlockNoteEditor = useBlockNote({});

  // Renders the editor instance using a React component.
  return (
    <div className="w-full h-full min-h-[500px]">
        <BlockNoteView  editor={editor} theme={"dark"} />
    </div>
  );
}

export default QuillEditor