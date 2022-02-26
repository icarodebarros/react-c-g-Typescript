import classes from './TodoItem.module.css';

interface TodoItemProps {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
