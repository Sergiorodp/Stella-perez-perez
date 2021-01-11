import css from 'styled-jsx/css'
import { colors } from '../../components/appLayout/index'

export default css`

.main-me-container{
    background: ${colors.secondary};
    width:100vw;
    display: grid;
    place-items: center;
}

.secction-container{
    padding: 30px;
    width: 70vw;
    display:grid;
    grid-template-columns: 1.2fr 0.8fr;
}

.info-container{
    color: ${colors.primary};
    grid: 1/2
}

.info-container h3{
    font-size:3em;
    padding: 10px;
}

.info-container p{
    font-size:1.5em;
    padding: 10px 0;
}

`