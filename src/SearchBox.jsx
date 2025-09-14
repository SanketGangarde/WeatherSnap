import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoBox from "./InfoBox";
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null); // New state to hold weather data
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2f8f675aa8252d1fea2477242dbdfa26";

    const getWeatherInfo = async () => {
        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("Failed to fetch weather data.");
            const data = await response.json();

            const result = {
                temp: data.main.temp,
                minTemp: data.main.temp_min,
                maxTemp: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like, // fixed typo (was `feelsLike`)
                weather: data.weather[0].description,
                cityName: data.name
            };

            console.log(result);
            setWeatherInfo(result); // Save the result in state

        } catch (error) {
            setError(true);
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getWeatherInfo();
    };

    return (
        <>
            <div className='SearchBox'>
                <h3>Search for the weather</h3>
                <br />

                <form onSubmit={handleSubmit}>
                    <TextField
                        id="city"
                        label="City Name"
                        variant="outlined"
                        onChange={handleChange}
                        value={city}
                        placeholder='Enter place to search...'
                        required
                    />
                    <br /><br />
                    <Button variant="contained" type='submit'>
                        Search
                    </Button>

                    {error && <p>No such place exists.</p>}
                </form>
            </div>

            {/* Only show InfoBox if weatherInfo is available */}
            {weatherInfo && <InfoBox info={weatherInfo}/> }
        </>
    );
}

