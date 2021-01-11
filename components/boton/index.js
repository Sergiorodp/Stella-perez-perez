import Link from 'next/link'

// Styles
import jsxstyle from './style'

export default function Button({url , nombre}){
    return(
        <>
            <Link href = {`${url}`}>
                <a className = "hov" >
                    <div className = "buttonMain"> {nombre} </div>
                </a>
            </Link>
            <style jsx>{jsxstyle}
            </style>
        </>
    )
}