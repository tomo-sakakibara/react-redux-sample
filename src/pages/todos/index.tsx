import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../../redux/actions/sample";

export const TodoForm = () => {
    const getData = useSelector((state: any) => state);
    const dispatch = useDispatch();
    console.log(getData);
    console.log(dispatch)
    const onClickCreate = () => {
        dispatch(addTodo('test'))
    }
    return <div>
        <div>
            <input></input>
            <button onClick={onClickCreate}>作成</button>
        </div>
        { getData.todos.length}
        <div>
            {getData.todos.map((todo: any, index: number) => {
                return (<div>{todo.text}{index}</div>)
            })}
        </div>
    </div>
}
