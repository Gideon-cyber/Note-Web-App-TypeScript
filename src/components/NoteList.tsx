import React from "react";
import { Note } from "../models/note.model";

import Notes from "./Notes";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NoteList = ({ notes, setNotes }: Props) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = () => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3">Note List</h2>
      <div> {renderNotes()} </div>
    </>
  );
};

export default NoteList;
