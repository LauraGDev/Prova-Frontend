import "./rightSection.scss";

const RightSection = ({ result, loading, error }) => {
    return (
        <section className="container right">
            
            <h2>Activitat:</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <p>
                {result ? result : "Estàs avorrit? Prem generar i et diré alguna cosa que pots fer"}
            </p>
        </section>
    );
};

export default RightSection;
