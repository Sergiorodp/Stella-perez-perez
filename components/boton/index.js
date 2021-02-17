import Link from 'next/link'
import {colors, breackPoint} from '../appLayout/index'

export default function Button({ url , nombre, background, color, height }){
    return(
        <>
            <Link href = {`${url}`}>
                <a className = "hov" >
                    <div className = "buttonMain"> {nombre} </div>
                </a>
            </Link>
            <style jsx>{`
                
            /*.hov{
                margin-top: 110px;
            }*/

            .buttonMain{
                /* background: red; */
                display: flex;
                align-items: center;
                justify-content: center;
                /*border: 2px solid ${colors.white};*/
                background: ${background};
                border-radius: 10px;
                padding: ${height} 24px;
                font-size: 1.2rem;
                font-weight: 500;
                color:${color};
                transition: 0.2s ease-in-out;
            }

            .buttonMain:hover,
            .buttonMain:focus,
            .buttonMain:active{
                /*border: 2px solid ${colors.primary};*/
                background: ${colors.green};
                padding: ${height} 24px;
                
                color: ${colors.secondary};
            }

                
                `}
            </style>
        </>
    )
}