import css from 'styled-jsx/css'
import { colors, breackPoint } from '../../components/appLayout/index'

export default css`

.main-me-container{
    background: ${colors.secondary};
    width:100vw;
    display: grid;
    place-items: center;
}

.secction-container{
    padding: 30px;
    width: 87vw;
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

@media (max-width: ${breackPoint.mobile}){

    .secction-container{
        width:90vw ;
        grid-template-columns: 1fr;
    }

    .info-container{
        text-aling:center;   
    }

    .info-container h3{
        font-size: 40px;
    }

    .info-container p{
        font-size: 15px;
    }

}

`