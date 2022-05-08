import "./Search.styles.css";
import SearchLineIcon from "remixicon-react/SearchLineIcon";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../redux/searchSlice";

export default function Search(){

    const value = useSelector(state => state.search.value)
    const dispatch = useDispatch()

    return (
        <div className='search-form'>
            <input
             value={value}
             onChange={(e) => {dispatch(setValue(e.target.value))}}
             className='input'
             placeholder='Поиск'
            />
            <SearchLineIcon 
             className='search-icon'
            />
        </div>
    )
}