import FilterContainer from "../filterContainer/FilterContainer";
import Button from "../buttons/mainButton/Button"
import './leftSection.scss'

const LeftSection = ( { onGenerate, onFilterChange, selectedFilters } ) => {
    return (
        <section className="container left">
            <FilterContainer onFilterChange={onFilterChange} selectedFilters={selectedFilters}  />
            <div className="generator">
                <img src="mascot.png" alt="Imatge mascota" />
                <h2>TROBA ALGUNA COSA A FER</h2>
                <Button  text="Generar" onClick={onGenerate} />
            </div>
        </section>
    );
};

export default LeftSection;
