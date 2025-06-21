import './Hello.css';
export default function Hello (props){

        return(
        <>
                <center>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-C3LyL5DDYFodbacIEI7sl1zdVF16g6awReJD95uxXofh4EHxANvEV93ukuBqq_dWx4&usqp=CAU' width='900' height='500'></img>
                <h1>Hello, my name is {props.name}  {props.surname}</h1>
                <h2>"Ruby Chan"</h2>
                </center>
                <hr></hr>
                <center>
                <button><a href="https://www.youtube.com/watch?v=21kxX_OinZ4">
                        <h3>Click to Goon</h3>
                        </a>
                </button>
                </center>
        </>);
}