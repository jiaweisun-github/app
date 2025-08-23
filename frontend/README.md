# React Java Application

This project is a full-stack application that combines a React frontend with a Java backend. The frontend is built using React, while the backend is developed using Spring Boot.

## Frontend

The frontend is located in the `frontend` directory. It includes the following files:

- **src/App.jsx**: The main React component that serves as the root of the application.
- **src/index.jsx**: The entry point for the React application, rendering the `App` component into the DOM.
- **public/index.html**: The main HTML file for the React application, containing the root div for mounting the React app.
- **package.json**: The configuration file for npm, listing dependencies and scripts for the frontend.

### Getting Started

1. Navigate to the `frontend` directory.
2. Install the dependencies using npm:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Backend

The backend is located in the `backend` directory and is built using Spring Boot. It includes the following files:

- **src/main/java/com/example/Application.java**: The entry point for the Java backend application.
- **pom.xml**: The configuration file for Maven, specifying project dependencies and build settings.

### Getting Started

1. Navigate to the `backend` directory.
2. Build the project using Maven:

   ```
   mvn clean install
   ```

3. Run the application:

   ```
   mvn spring-boot:run
   ```

The backend will be available at `http://localhost:8080`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.