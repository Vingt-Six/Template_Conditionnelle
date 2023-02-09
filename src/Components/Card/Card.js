import './Card.css'

function Card(props) {
    return (
        <div className={props.bool === true ? 'card alco' : 'card'}>
            <h1>{props.jsp}</h1>
            <p>{props.oui}</p>
        </div>
    )
}

export default Card