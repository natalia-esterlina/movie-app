# Movie App

## Description
This project is a movie app that provides a list of movies where you can view details, edit, or delete. If you want, you can add movies and also select your favorites.

## Features
- List movies from an external API
- View movie details
- Add movies manually
- Edit and delete movies
- Mark movies as favorites
- Responsive design

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/natalia.esterlina/movie-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd movie-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

4. Configure the API key:

Create a new file src/environments/environment.ts

Add the following content:
```ts
export const environment = {
  production: false,
  apiKey: 'YOUR_API_KEY_HERE',
  apiUrl: 'https://api.streamingavailability.com](https://streaming-availability.p.rapidapi.com/shows'
};
```

Replace 'YOUR_API_KEY_HERE' with your actual API key.

5. Run the application:
   ```sh
   ng serve
   ```
6. Open in your browser: `http://localhost:4200`

## Requirements
- Node.js ^18.18.0
- Angular ^18.0.1
- Angular Material
- A valid API key for Streaming Availability API

## Usage
- Browse all available movies in the "All Movies" tab. You can see details about each one.
- Add movies to your favorites.
- Remove movies from the list or favorites.
- Edit or add new movies.

## Project Structure
```
/movie-app
│── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── pages/
│   │   ├── data/
│   │   │   ├── models/
│   │   │   ├── mappers/
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   ├── environments/
│   │   ├── environment.ts (not included in the repo, must be created)
│── angular.json
│── package.json
│── README.md

## Author
- **Natalia G.S* – [GitHub Profile](https://github.com/natalia-esterlina)

## License
This project is licensed under the MIT License.


