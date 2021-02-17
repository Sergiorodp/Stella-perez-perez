import css from 'styled-jsx/css'
import { colors, breackPoint } from '../appLayout/index'

export default css`

.mainNavContainer{
    z-index: 100;
    position: fixed;
    width: 100vw;
    /* background: ${colors.primary}; */
    display: grid;
    height: 3.5rem;
    place-content: center;
    transition: .2s ease-in-out;
   
}

.blur{
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: saturate(160%) blur(10px);
    border-bottom: 1px solid rgba(0,0,0,.1);

}

.navItemsContainer{
    color: ${colors.black};
    max-width: 1600px;
    width: 80vw;
    /* margin: 0 20%; */
    display: grid;
    /* background: red; */
    grid-template-columns: repeat(3,1fr);
}

.navItemsContainer p{
    display: flex;
    flex-direction: column;
    /* background: red; */
    align-items: center;
    justify-content: center;
}

.body-active{
  overflow: hidden;
}
.opciones{
    grid-column: 3/4;
    display: flex;
    /* justify-content: flex-end; */
    /* justify-content:space-between; */
    /* background: red; */
}

.button-contact-nav{
    grid-column: 2/3;
    width:40%;
}


.listItems{
    display: flex;
    width:100%;
    list-style: none;
    align-items: center;
    justify-content:space-between;
    /* background:blue; */
}

.listItems li{
    font-weight: 500;
    transition: 0.2s ease-in-out;
}

.listItems li :hover{
    color: ${colors.green};
}

.lines-nav-container{
    display: none;
}

.lines-block{
    cursor: pointer;
}

@media (max-width: ${breackPoint.mobile}){

    .navItemsContainer{
        width:80vw;
        grid-template-columns: repeat(2,1fr);
    }
    
    .lines-nav-container{
        display: flex;
        grid-column: 2/3;
        align-items: center;
        /* background:black; */
    }

    .lines-block{
        margin:0 0 0 auto;
    }

    .line-div{
        width: 25px;
        height: 2px;
        background-color: ${colors.white};
        margin-top: 4px;
        margin-bottom: 4px;
        border-radius:9999px;
        transition: 0.2s ease-in-out;
    }

    .moverLeft{
        width: 35px;
    }

    .moverRight{
        width: 28px;
    }


    .opciones{
        height: 100vh;
        width: 105vw;
        margin: 2.5em 0 0 0;
        position:fixed;
        background-color: rgba(0 ,0 ,0 ,0);

        transform: translateX(100%);
        transition: transform .6s ease-in-out;
    }

    .listItems{
        align-items: initial;
        justify-content:right;
        background:${colors.primary};
        margin: 0 0 0 7em;
        width: 100%;
        transform: translateX(100%);
        flex-direction: column;
        transition: transform .6s ease-in-out;
    }


    .listItems li{

        width: 100%;
        /* background:red; */
        border-bottom: 1px solid ${colors.white};
        margin: 0 5px;
        padding: 15px 10px;
        
    }

    .listItems li a div{
        /* background:red; */
        width:100%;
    }


    .listItems-open{
        transform: translateX(0%);
    }

    .opciones-open{
        background-color: rgba(0 ,0 ,0 ,0);
        transform: translateX(-10%);
    }

}

`