import css from 'styled-jsx/css'
import { colors, breackPoint } from '../../components/appLayout/index'

export default css`

.main-me-container{
    /* background: ${colors.secondary}; */
    width:100vw;
    height:90vh;
    display: grid;
    place-items: center;
    background:#fafafa;
}

.secction-container{
    padding: 30px;
    width: 100%;
    display:grid;
    /* background:blue; */
    /* grid-template-columns: 1.2fr 0.8fr; */
    grid-template-columns:50% 50%;
}

.info-container{
    color: ${colors.black};
    width:92%;
    grid: 2/3;
    /* background:red; */
}

.info-container h3{
    font-size:3em;
    padding: 0 10px;
}

.info-container p{
    font-size:1.5em;
    padding: 10px 0;
}

.foto-container{
    display:flex;
    justify-content:center;
    align-items:center;
}

.background-img{
    width:400px;
    height:400px;
    border-radius:20px;
    background:${colors.secondary};
}

.imagen-foto{
    position:relative;
    bottom:20px;
    left:20px;
    border-radius: 20px;
    /* border: 20px solid ${colors.secondary} */

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