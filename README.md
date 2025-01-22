# Klimate

**Klimate** is a sleek and modern weather application built with **React**, **TypeScript**, and **ShadCN**. Designed with a beautiful and responsive user interface, Klimate provides accurate weather information, making it an essential tool for tracking weather conditions.

## Features

- **Search for Cities:** Quickly search for weather updates in any city using the intuitive search bar.
- **Current Weather Information:** Displays real-time weather data, including temperature, humidity, wind speed, and more.
- **Hourly and Weekly Forecasts:** Plan your day and week with detailed hourly and multi-day forecasts.
- **Favorite Cities:** Save your favorite locations for easy access.
- **Search History:** Keep track of your recent searches and revisit them with a single click.
- **Geolocation Support:** Automatically fetch weather data for your current location.
- **Error Handling:** Graceful error messages and retry options for failed data fetches.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

## Technology Stack

### Frontend

- **React**: A popular JavaScript library for building user interfaces.
- **TypeScript**: Provides type safety and modern JavaScript features for better development experience.
- **ShadCN**: A utility-first framework for building beautiful and accessible UI components.

### APIs

- **Weather API**: Fetches current weather and forecast data (integrated with a weather API of your choice, e.g., OpenWeatherMap).

### Libraries and Tools

- **React Router**: Enables navigation between pages.
- **Date-fns**: For date formatting and manipulation.
- **Tailwind CSS**: Used for styling with utility-first CSS classes.
- **Lucide Icons**: Provides beautiful icons for an enhanced UI experience.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nainee99/klimate.git
   cd klimate
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add your weather API key:

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

## Folder Structure

```
klimate/
├── public/          # Public assets
├── src/
│   ├── components/  # Reusable React components
│   ├── hooks/       # Custom hooks
│   ├── pages/       # Page components
│   ├── styles/      # Global and component-specific styles
│   ├── utils/       # Utility functions
│   ├── App.tsx      # Main application entry point
│   ├── index.tsx    # Application bootstrapping
├── .env             # Environment variables
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with a descriptive message.
4. Push your branch and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **OpenWeatherMap API** (or any API used) for weather data.
- **ShadCN** for the elegant UI components.
- The open-source community for libraries and tools.

Enjoy using Klimate! 🌤️
