
# News & Weather App

This project is a responsive News and Weather application built using React with Vite. It fetches and displays recent news articles from GnewsAPI and weather information from OpenWeatherMap API, offering a rich user experience with multiple interactive features.




## Features

### News Listing
- Displays a list of recent news articles with each article showing a title and a short description.

### Search Functionality
- Includes a dynamic search bar that allows users to filter news articles based on keywords.

### Location Detection
- Prompts the user for permission to access their location.
- If permission is granted, it fetches and displays news specific to the user’s region.
- Defaults to showing news from India if location detection is denied or fails.

### Language Switcher

- Allows users to switch between English and Hindi for news content.

### Weather Information
- Displays a modal with detailed weather information based on the user’s location.




## Tech Stack

**Client:** React, Redux, TailwindCSS, React Spinners, Flowbite




## Installation

Install my-project with npm
- Clone the repository.
- Install dependencies
```bash
  npm install
```
- Start the development server
```bash
  npm run dev
```
    
### Getting Started with the APIs



- Obtain an API key from OpenWeatherMap.
- Obtain an API key from GnewsAPI.
- Add these API keys to your environment variables as specified in the project configuration.
## Usage



- Launch the application in your local environment and explore the news and weather features.
- Use the search bar to filter articles, and switch languages or allow location access as needed for personalized content.