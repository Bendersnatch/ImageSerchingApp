import SearchBar from "./components/SearchBar";
import searchImage from './api';

function App() {
    const handleSubmit = async (term) => {
        const result = await searchImage(term);

        console.log(result)
    }

    return(
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    )
};

export default App;
