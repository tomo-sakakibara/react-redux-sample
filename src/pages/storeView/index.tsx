import { useSelector } from "react-redux";

export const StoreView = () => {
    const getData = useSelector((state: any) => state);
    return <div>{getData.todos.length}</div>
}