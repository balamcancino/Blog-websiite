import React from 'react';
import TitleTask from "../atoms/TitleTask";
import Card from "../molecules/Card";
import './NotesSection.css';

function NotesSection({ listTask, moveToCompleted, deleteTask }) {
    const cards = [];
    let current = listTask.head;

    if (current) {
        do {
            const task = current.data;
            cards.push(
                <Card
                    key={`${task.titulo}-${task.descripcion}`}
                    titulo={task.titulo}
                    descripcion={task.descripcion}
                    moveToCompleted={moveToCompleted}
                    deleteTask={deleteTask}
                />
            );
            current = current.next;
        } while (current !== listTask.head);
    }

    return (
        <div id="box">
            <div id='textdiv'>
            <TitleTask text="Notas" />
            </div>
            <div id="section_cards">
                {cards}
            </div>
        </div>
    );
}

export default NotesSection;
