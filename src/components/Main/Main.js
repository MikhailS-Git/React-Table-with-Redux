import "./Main.styles.css";
import Search from "../Search/Search";
import Table from "../Table/Table";


export default function Main(){

    return (
        <div className='main'>
                <Search />
                <Table />
        </div>
    )
}