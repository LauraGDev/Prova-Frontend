import FilterContainer from "../filterContainer/FilterContainer";
import Button from "../buttons/mainButton/Button"
import './leftSection.scss'

const LeftSection = () => {
    return (
        <section className="container left">
            <FilterContainer />
            <div className="generator">
                <img src="mascot.png" alt="Imatge mascota" />
                <h2>TROBA ALGUNA COSA A FER</h2>
                <Button />
            </div>
        </section>
    );
};

export default LeftSection;
