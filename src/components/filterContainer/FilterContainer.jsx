import Filter from "../buttons/filter/Filter";
import "./filterContainer.scss";

const FilterContainer = ({ onFilterChange, selectedFilters }) => {
    const filtersMap = {
        "Social": "social",
        "Educacció": "education",
        "Caritat": "charity",
        "Cuinar": "cooking",
        "Relaxació": "relaxation",
        "Treball intens": "busywork",
    };

    const filters = Object.keys(filtersMap);

    const handleFilterChange = (filter) => {
        const value = filtersMap[filter];
        const newSelected = selectedFilters.includes(value)
            ? selectedFilters.filter((f) => f !== value)
            : [...selectedFilters, value];
        onFilterChange(newSelected);
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
