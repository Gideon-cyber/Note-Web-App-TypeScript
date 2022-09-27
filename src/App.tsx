import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";

import { Note } from "./models/note.model";
import { Col, Container, Row } from "react-bootstrap";
import NoteList from "./components/NoteList";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with uI/Ux Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
