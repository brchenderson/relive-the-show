import React from 'react'

const Pagination = (props) => {
    if(props.total <= props.itemsPerPage){
        return null;
    } else{
        var pages = [];
        for(let i = 0;  i < Math.ceil(props.total / props.itemsPerPage); i++){
            pages.push(<li><a href="#" onClick={ () => props.changePage(props.searchParam, i + 1)}>{i + 1}</a></li>)
        }
    }
    return(
        <ul>
            {pages}        
        </ul>
    )


}

export default Pagination;