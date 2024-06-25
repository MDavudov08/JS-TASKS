function Card({name,surname,description}) {
    return <div className="card">
        <h2>{name} {surname}</h2>
        <p>{description}</p>
    </div>
}

export default Card;