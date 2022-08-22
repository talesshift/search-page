import styled from "@emotion/styled"
import { useContext } from "react"
import { Search } from "../components/search"
import { SearchContext } from "../components/searchContext"
import SearchResults from "../components/searchResults"
import useGoogleSearch from "../components/useGoogleSearch"
import { container } from "../consts"
import { response } from "../response"

type Props = {
    className?: string
}

const Results_unstyled = (props: Props) => {
    const { searchCtx, setSearchCtx } = useContext(SearchContext);
    //const data = useGoogleSearch(searchCtx.query);
    const data = response;

    return (
        <section className={props.className}>
            <Search size="medium"/>
            <div className="title">Aproximadamente {data.searchInformation.totalResults} resultados</div>
            <SearchResults request={data} />
        </section>
    );
};

const Results = styled(Results_unstyled)`
    .title{
        ${container}
        font-size:1.25rem;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 0.2rem;
    }
`

export default Results;

//process.env.REACT_APP_CUSTOM_SEARCH_API_KEY