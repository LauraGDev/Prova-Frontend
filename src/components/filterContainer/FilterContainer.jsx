import { useState } from "react";
import Filter from "../buttons/filter/Filter";
import "./filterContainer.scss";

const FilterContainer = () => {
    const filters = [
        "Social",
        "Educacció",
        "Caritat",
        "Cuinar",
        "Relaxació",
        "Treball intens",
    ];
    const [selectedFilters, setSelectedFilters] = useState([]); // Estado para almacenar los filtros seleccionados

    const handleFilterChange = (filter) => {
        setSelectedFilters(prevSelected => {
            // Si el filtro ya está seleccionado, lo eliminamos
            if (prevSelected.includes(filter)) {
                return prevSelected.filter(f => f !== filter);
            } else {
                // Si no está seleccionado, lo añadimos
                return [...prevSelected, filter];
            }
        });
    };

    return (
        <section className="filters">
            {filters.map((filter, index) => (
                <Filter
                    key={index}
                    text={filter}
                    id={`toggleButton-${index}`}
                    onChange={() => handleFilterChange(filter)}
                />
            ))}
        </section>
    );
};

export default FilterContainer;
