export const VisaKortti = ({
    imgSrc,
    imgAlt,
    mysteryImg,
    flipped = false,
    title,
    description,
    location,
    learnMoreTitle,
    learnMoreURL,
}) => {
    return (
        <div className="visa-card">
            {imgSrc && imgAlt && (
                <img className="image" src={imgSrc} alt={imgAlt} />
            )}
            {title && <h1 classname="title">{title}</h1>}
            {description && <p className="description">{description}</p>}
            {location && <p className="location">{location}</p>}
            {learnMoreTitle && learnMoreURL && (<Button variant="contained"
                className="learn-more-button" 
                onClick ={()=> navigate(learnMoreURL)}>{learnMoreTitle}</Button>)}
        </div>
    )
}