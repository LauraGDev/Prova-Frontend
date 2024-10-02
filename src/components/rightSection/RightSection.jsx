import "./rightSection.scss"

const RightSection = ( { result } ) => {
    return (
        <section className="container right">
            <h2>Activitat:</h2>
            <p>{result} Text a friend you haven't talked to in a long time</p>
        </section>
    );
};

export default RightSection;
