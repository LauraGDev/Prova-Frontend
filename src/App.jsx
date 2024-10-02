import "./App.scss";
import { useEffect, useState } from "react";
import { API_RANDOM, API_FILTER } from "./config/urls";
import useApi from "./services/useApi";
import Header from "./components/header/Header";
import LeftSection from "./components/leftSection/LeftSection";
import RightSection from "./components/rightSection/RightSection";

function App() {
    const [url, setUrl] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [result, setResult] = useState(null);
    const { data, loading, error } = useApi(url);

    useEffect(() => {
        if (data) {
            if (Array.isArray(data)) {
                const randomIndex = Math.floor(Math.random() * data.length);
                setResult(data[randomIndex].activity);
            } else if (data.activity) {
                setResult(data.activity);
            }
        }
    }, [data]);

    const handleGenerate = () => {
        if (selectedFilters.length > 0) {
            setUrl(`${API_FILTER}${selectedFilters.join("&")}`);
        } else {
            setUrl(API_RANDOM);
        }
    };

    const handleFilterChange = (newSelectedFilters) => {
        setSelectedFilters(newSelectedFilters);
    };

    return (
        <>
            <Header />
            <main>
                <LeftSection
                    onGenerate={handleGenerate}
                    onFilterChange={handleFilterChange}
                    selectedFilters={selectedFilters}
                />
                <RightSection result={result} loading={false} error={false} />
            </main>
        </>
    );
}

export default App;
