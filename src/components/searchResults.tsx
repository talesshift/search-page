import styled from "@emotion/styled";
import { colors, container } from "../consts";
import { response } from "../response";

type Props = {
    request: typeof response;
}

type ResultProps = {
    item: typeof response.items[0];
    className?:string
}


const SearchResult_unstyled = (props: ResultProps) => {
  return (
    <div className={props.className}> 
        <div className="date">20/02/2022 20:07:10</div>
        <div className="info"><a href="#" className="author">{props.item.displayLink}</a><a className="from">{props.item.kind}</a></div>
        <div className="titulo"><a href={props.item.link}>{props.item.snippet}</a></div>
        <div className="original"><a href={props.item.link}>Post original</a></div>
    </div>
  )
}

const SearchResults = (props: Props) => {
    return (
        <>
            {props.request.items.map(function(item) {
                return(
                    <SearchResult key={item.cacheId} item={item}/>
                )
            })}
        </>
    )
}

const SearchResult = styled(SearchResult_unstyled)`
    ${container}
    max-width: 41rem;
    margin-left:2.5%;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    .date{
        color: #bfbfbf;
        font-size: 0.75rem;
    }
    .info{
        margin-top: 0.1rem;
    }
    .info a{
        text-decoration: none;
    }
    .info .author{
        font-size: 0.875rem;
        color: ${colors.get("pink")};
        font-weight: 600;
    }
    .info .from{
        font-size: 0.875rem;
        color: ${colors.get("blue")};
        font-weight: 300;
        margin-left: 0.5rem;
    }
    .titulo{
        font-size: 1rem;
        color: ${colors.get("blue")};
        font-weight: 500;
        margin-top: 0.625rem;
    }
    .original{
        font-size: 0.875rem;
        color: ${colors.get("blue")};
        font-weight: 300;
        margin-top: 0.625rem;
    }
`

export default SearchResults