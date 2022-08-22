import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react';
import Button from './button';
import {useLocation, useNavigate} from "react-router-dom"
import Logo from './logo';
import { SearchContext } from './searchContext';
import { container } from '../consts';

type Props = {
    className?:string;
    size?:"big"|"medium"|"small";
}

type SearchProps = {
    size?:"big"|"medium"|"small";
}

type sizeType = {
    positioning:string,
    searchbar:string,
}

export const sizes = new Map<string, sizeType>(
    [
        ['medium',{positioning:`
        display:flex;
        align-items: center;
        justify-content: space-between;
        ${container}
        `,searchbar:`
        height: 0.925rem;
        flex:1;
        margin: 2.1rem 1.1rem 2.1rem 2.1rem;`}],
        ['big',{positioning:` `,searchbar:`
            height:30px;
            width: 75vw;
            margin: 2.1rem auto;
        `}]
    ]
);

const Search_unstyled = (props: Props) => {

    const [input, setInput] = useState("")
    const navigate = useNavigate();
    const this_location = useLocation();
    const {searchCtx,setSearchCtx} = useContext(SearchContext)

    React.useEffect(() => {
        setInput(searchCtx.query);
      }, [searchCtx.query]);

    const doSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //stop null search
        if(input == ""){return}
        //create location route
        const results_location = {
            pathname: '/results',
            search: `?search=${input}`,
            state: {
                query: input,
            }
        }
        //set context
        setSearchCtx({query:input});
        //go to location
        navigate(results_location);
    };

    return (
        <form className={props.className}>
            <Logo onClick={() => {(this_location.pathname == '/results') ? navigate('/'):console.log("congrats! you clicked the logo!")}} primary='purple' secondary='green' size={40}>Bolso<span>data</span></Logo>
            <div className='search-bar'>
                <SearchIcon className='search-icon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
            </div>
            <div className='search-buttons'>
                <Button size={props.size} type='submit' onClick={doSearch}>Buscar</Button>
            </div>
        </form>
    )
}



export const Search = styled(Search_unstyled)<SearchProps>`
    ${(props => (sizes.get(props.size || "big")!.positioning))}
    .search-bar {
        ${(props => (sizes.get(props.size || "big")!.searchbar))}
        display:flex;
        align-items:center;
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;
        max-width: 800px;
        overflow:hidden;
        background-color:rgb(242, 244, 248);
    }
    .search-bar:hover {
        box-shadow: 0 1px 1px rgba(32,33,36,.18);
    }
    .search-bar input {
        flex:1;
        padding: 0.625rem 1.25rem;
        font-size: 1.25rem;
        line-height: 1.625;
        border:none;
        font-weight: 500;
        background-color:rgba(242, 244, 248, 0);
        color: #373F41;
    }   
    svg{
        font-size: 1.75rem;
    }
    
`
