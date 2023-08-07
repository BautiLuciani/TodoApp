# DRAG AND DROP
1. Instalamos la libreria DND
2. Envolvemos el contenedor en el cual vamos a realizar los drag and drops con DragDropContext → App.jsx
3. Envolvemos el contenedor en el cual se van a poder hacer drop los elementos con Droppable → TodoList.jsx
4. Colocamos todo lo que esta dentro del Droppable en una funcion y le agregamos la prop droppableProvided
5. Agregamos el droppableId en el Droppable
6. Le pasamos la referencia del innerRef al primer elemento dento del Droppable
7. Creamos el spread operator del droppableProps en el primer elemento dento del Droppable
8. Agregamos el placeholder al final del primer elemento dento del Droppable para almacenar un lugar en el contenedor al agarrar un elemento
9. Envolvemos cada elemento el cual se puede hacer drag con Draggable → TodoList.jsx
10. Colocamos todo lo que esta dentro del Draggable en una funcion y le agregamos la prop draggableProvided
11. Agregamos el index y el draggableId en el Draggable
12. Le pasamos la referencia del innerRef al componente dentro del Draggable
13. Creamos el spread operator del dragHandleProps en el componente dentro del Draggable
14. Creamos el spread operator del draggableProps en el componente dentro del Draggable
15. Agregamos el onDragEnd en el DragDropContext → App.jsx
16. Creamos la funcion que pasamos dentro del onDragEnd
