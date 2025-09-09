# Weather Dashboard

This project is a simple weather dashboard that displays current weather information for a specified location. It fetches data from a public weather API and presents it in an easy-to-read format.

## Features

- Search for current weather by city name
- View temperature, humidity, wind speed, and weather conditions
- Responsive design for desktop and mobile
- Powered by a public weather API (e.g., [OpenWeatherMap](https://openweathermap.org/api))

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/carlthomasiv/test-neon-local.git
   cd test-neon-local
   ```

2. **Install dependencies:**
   ```bash
   # If using Node.js/React
   npm install
   ```

3. **Set up API key:**
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api) or another weather provider.
   - Create a `.env` file in the root of your project:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the app:**
   ```bash
   npm start
   ```

## Example Usage

- Enter a city name in the search bar
- View real-time weather data and conditions

## Technologies Used

- React (or your chosen front-end framework)
- Fetch API/Axios for HTTP requests
- Public weather API (OpenWeatherMap, WeatherAPI, etc.)

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

*This README is a starter template. Update it as you implement features!*