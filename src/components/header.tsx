import styled from '@emotion/styled'

type Props = {
    className?:string
}

const Navio = (props: Props) => {
  return (
    <nav className={props.className}>
        <div className='container'>
            <div className='logo'>ALOU</div>
            <div className='menu'></div>
        </div>

    </nav>
  )
}

const Header = styled(Navio)`
    height: auto;
    line-height: initial;
    padding: 1.6875rem 0 1.875rem 0;
    background-color: #F4F4F4;
    box-shadow: none;

    .container{
        max-width: 74.1875rem !important;
        width: 95% !important;
        margin: 0 auto;
        box-sizing: inherit;
    }
`

export default Header