import { useSelector, useDispatch } from "react-redux";





 const Nav = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="App  ">
           <ul>
<li>Count: {count}</li>


           </ul>
        </div>
    )
}
export default Nav;