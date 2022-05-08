import { useMemo, useState } from "react";
import "./Table.styles.css";
import Pagination from "../Pagination/Pagination";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import ArrowUpSLineIcon from "remixicon-react/ArrowUpSLineIcon";
import { useDispatch, useSelector } from "react-redux";
import { setColomn, setOrder } from "../../redux/searchSlice";


export default function Table(){

    const data = useSelector(state => state.posts.posts)
    const { colomn, order, value, currentPage } = useSelector(state => state.search)
    const dispatch = useDispatch()

    // Pagination functionality
    const lastPost = currentPage * 10
    const firstPost = lastPost - 10

    // Filter and sort fetched posts according to parameters
    const sortedPosts = useMemo(()=> Sort(data), [data, colomn, order, value])

    const postsToShowOnCurrentPage = sortedPosts.slice(firstPost, lastPost)

    function Sort(arr) {

        const copyArray = [...arr].filter((post) => {
            return post ? (String(post.id).includes(value) || post.title.includes(value) || post.body.includes(value)) : null
        })

        switch (colomn) {
            case 'ID':
                switch (order) {
                    case true:
                        return copyArray.sort((a,b) => Number(a.id) - Number(b.id))
                    case false:
                        return copyArray.sort((a,b) =>  Number(b.id - Number(a.id)))
                }

            case "Title":
                switch (order) {
                    case true:
                        return copyArray.sort((a,b) => {
                            return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
                        })
                    case false:
                        return copyArray.sort((a,b) => {
                            return b.title > a.title ? 1 : b.title < a.title ? -1 : 0
                        })
                }
            
            case "Text":
                switch (order) {
                    case true:
                        return copyArray.sort((a,b) => {
                            return a.body > b.body ? 1 : a.body < b.body ? -1 : 0
                        })
                    case false:
                        return copyArray.sort((a,b) => {
                            return b.body > a.body ? 1 : b.body < a.body ? -1 : 0
                        })
                }
        }
    }

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th onClick={()=> {dispatch(setColomn('ID')); dispatch(setOrder())} }>
                            <div className='th-div'>
                                <span>ID</span>
                                {
                                 (colomn === 'ID' && order === false) ?
                                 <ArrowUpSLineIcon className='table-icon' /> :
                                 <ArrowDownSLineIcon className='table-icon' />
                                }
                            </div>
                        </th>
                        <th onClick={()=> {dispatch(setColomn('Title')); dispatch(setOrder())} }>
                            <div className='th-div'>
                                <span>Заголовок</span>
                                {
                                 (colomn === 'Title' && order === false) ?
                                 <ArrowUpSLineIcon className='table-icon' /> :
                                 <ArrowDownSLineIcon className='table-icon' />
                                }
                            </div>
                        </th>
                        <th onClick={()=> {dispatch(setColomn('Text')); dispatch(setOrder())} }>
                            <div className='th-div'>
                                <span>Описание</span>
                                {
                                 (colomn === 'Text' && order === false) ?
                                 <ArrowUpSLineIcon className='table-icon' /> : 
                                 <ArrowDownSLineIcon className='table-icon' />
                                }
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postsToShowOnCurrentPage.map((item, index) => {
                            return (
                                <tr key={item.title+index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            { !sortedPosts.length ? <p>Nothing to show...</p> : null }

            <Pagination
             linesPerPage={10}
             totalLines={sortedPosts.length}
            />
        </div>
    )
}