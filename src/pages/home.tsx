import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
// STYLE - imports
import {colors} from '../consts'
import {breakpoints} from '../consts'

const bp = breakpoints

type Props = {
  className?:string
}
type LogoProps = {
  primary?:string|undefined,
  secondary?:string|undefined,
}

const Homie = (props: Props) => {
  return (
      <section className={props.className}>
        <div className="logo">
          <Logo primary='metapurple' secondary='metagreen'>Bolso<span>data</span></Logo>
        </div>
        <div className="searchbar">
  
        </div>
        <div className="buttons">
          
        </div>
      </section>
  )
}

const Logo = styled.span<LogoProps>`
  color: ${props => (colors.get(props.primary || "#373F41"))};
  font-size:5rem;
  font-weight: bolder;
  font-family: 'Fira Sans', sans-serif !important;
  span{
    color: ${props => (colors.get(props.secondary || "#373F41"))};
  }
  ${bp.get('s')} {

  }
`

const Home = styled(Homie)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:center;
`

export default Home;
