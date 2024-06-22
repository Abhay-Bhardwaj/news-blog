# News Blog React Website

This repository contains the code for a news blog website built using React. Below, you'll find a brief description of the file structure and instructions for setting up and running the project.

## File Structure Description

- **`public/`**: Contains the `index.html` file.
- **`src/`**: Main source directory.
  - **`components/`**: Contains reusable React components.
    - `NavBar.jsx`: Navigation bar component.
    - `NewsCard.jsx`: Component for displaying news articles.
    - `SearchBar.jsx`: Search bar component.
  - **`context/`**: Contains context-related files.
    - `NewsContext.jsx`: Context for managing news data.
  - **`pages/`**: Contains React components for different pages.
    - `ArticlePage.jsx`: Article details page.
    - `HomePage.jsx`: Home page with news articles.
    - `LikedPage.jsx`: Page for liked articles.
  - **`static/`**: Static assets (images, JavaScript files).
    - `images/`: Directory for images.
    - `DateFomat.jsx`: JavaScript utility for date formatting.
    - `FilterArticle.js`: JavaScript utility for filtering articles.
  - Root-level files:
    - `App.js`: Main application component.
    - `App.css`: CSS styles for the app.
    - `index.js`: Entry point for React rendering.
    - `NewsData.js`: Mock data for news articles.
- **Root-level files**:
  - `.env`: Environment variables (e.g., API keys).
  - `.gitignore`: Git ignore file.
  - `README-example.md`: Example README file (you can replace this).

## Installation Instructions

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file and add any necessary environment variables.
5. Run `npm start` to start the development server.

## Usage Guide

- Visit the home page to see a list of news articles.
- Use the search bar to filter articles by keywords.
- Click on an article to view its details.
- Liked articles can be saved in the "Liked" section.

## Contributing Guidelines

Contributions are welcome! Please follow standard Git practices and create a pull request.

## License Information

This project is licensed under the MIT License.

## Contact Information

For any questions or issues, feel free to contact the project maintainers.
