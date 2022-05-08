import "./Pagination.styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/searchSlice";

export default function Pagination({ linesPerPage, totalLines }){

    const currentPage = useSelector(state => state.search.currentPage)
    const dispatch = useDispatch()
    const Pages = []

    // create a list of pages to be shown in pagination
    for (let i=1; i<=Math.ceil(totalLines / linesPerPage); i++) {
        Pages.push(i)
    }

    return (

        <div className='pagination-container'>
            <Link
             to={`/${currentPage>1 ? currentPage-1 : currentPage}`}
             className='pgn-btn'
             onClick={()=>{dispatch(setCurrentPage(currentPage>1 ? currentPage-1 : currentPage))}}
            >
                Назад  
            </Link>
            <ul className="pagination">
                {
                    Pages.map((page) => (
                        <li className="page-item" key={page}>
                            <Link 
                             to={`/${page}`}
                             className={currentPage===page ? "page-btn active-page" : "page-btn"}
                             onClick={()=>{dispatch(setCurrentPage(page))}}
                            >
                                {page}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Link 
             to={`/${currentPage<Pages.length ? currentPage+1 : currentPage}`}
             className='pgn-btn'
             onClick={()=>{dispatch(setCurrentPage(currentPage<Pages.length ? currentPage+1 : currentPage))}}
            >
                Далее
            </Link>
        </div>
        
    )
}