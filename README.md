# BFS Tracing Project (Demo)

Welcome to the BFS Tracing Project! This project demonstrates a visual representation of a Breadth-First Search (BFS) algorithm on a dynamically generated grid. Below you will find detailed information about the project, including how to set it up, the technologies used, and its structure.

### Note
This project is just a demo that i made in order to understand the concept of BFS and how it is used as algorithm in the code to find the possible path. The final project might be different, even other langages can also be included. That project will be updated soon. I will attached its github link once its done.

## Project Overview

In this project, I developed a visually appealing UI that generates a random grid each time it starts. The grid is then traversed using the BFS algorithm to find a possible path. If a solution exists, the path is highlighted; otherwise, "No path found" is displayed. This project is built using the React framework and JavaScript, leveraging modern web development techniques for an interactive and dynamic user experience.
Technologies Used

React: A JavaScript library for building user interfaces.
JavaScript: The programming language used for logic and algorithms.
CSS: For styling and layout.

## Project Structure

The project is organized into several components and directories for better maintainability:

src/components: Contains all React components, such as Header, Footer, Experience, and Projects.
src/assets: Stores images, icons, and other static assets.
src/styles: Includes CSS modules for styling components.
src/data: Contains JSON files with data for skills and history (now embedded directly in components).
src/utils: Utility functions, like getImageUrl.
public: Public assets and the main HTML file.

## Main Components
App.js: The root component that includes the main layout and routing.
Game.js: Handles the game logic and renders the grid.
PathFinder.js: Contains the BFS algorithm implementation.




### When path is found
![Screenshot 2024-06-19 092015](https://github.com/akshatrajsaxena/bfs_tracing/assets/119042958/d6928e06-8931-4ad2-9081-950f4795fbd3)



### When No path found
![Screenshot 2024-06-19 092026](https://github.com/akshatrajsaxena/bfs_tracing/assets/119042958/e712f864-a05f-4269-89db-f2cae287be04)




## How to Access the Project

Clone the Repository

bash
```
git clone https://github.com/your-username/bfs-tracing.git
cd bfs-tracing
```
Install Dependencies

bash
```
npm install
```
Run the Development Server

bash
```
npm start
```
Open http://localhost:3000 in your browser to view the project.
Purpose of This Project

The purpose of this project is to visualize the BFS algorithm's process in solving a dynamically generated grid. It aims to provide a clear and interactive demonstration of pathfinding algorithms.
Styling

The project uses CSS modules for styling, ensuring scoped and maintainable CSS. It also utilizes CSS Flexbox and Grid for layout management.
How to Contribute

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!



## Contact

If you have any questions or would like to get in touch, you can reach me at akshat22054@iiitd.ac.in.
