import React from 'react';
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import TitleCard from '../atoms/TitleCard';
import './Card.css';

function CardToDo({ titulo, descripcion, deleteTask }) {


    const handleDelete = () => {
        deleteTask(titulo, descripcion);
    };

    return (
        <div id="cards_todo">
            <div id="text">
                <TitleCard text={titulo} />
                <Text text={descripcion} />
            </div>
            <div id="buttons_card">
                <div>
                    <Button
                        title="Eliminar"
                        onClick={handleDelete}>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CardToDo;
