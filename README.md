# Panorbit test assesment

This is a panorbit react test assesment. I got asigned on july 5 2023 submission date would be before 8 july, 5:30PM 2023

## Project Description

This project is not built using tools like create-react-app or webpack. Instead, it is based on the latest technology with the vite template created by the vite team. The project utilizes the latest ES7 technologies in React.

In terms of application development, Material UI (styled component structure) has been employed for stylings, along with advanced and reusable components. This choice was made to ensure cross-browser compatibility, supporting Chrome, Firefox, and Safari. Additionally, I opted against using static external CSS.

For state management, Redux Toolkit was utilized to enhance handling, reduce folder structure, and avoid the need for additional packages such as async middlewares for processing asynchronous requests.

The application boasts a logical component and folder structure, making it easy for anyone who has worked with it to understand and progress without any hassle.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [Material UI](https://mui.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Leaflet React](https://react-leaflet.js.org/)

# Project Structure

- `public/` - Contains static assets.
- `src/` - Contains the main source code of the application.
- `src/components/` - Contains page level reusable React components.
- `src/pages/` - Contains individual pages or views of the application.
- `src/redux/` - Contains Redux-related files (actions, reducers, store configuration, etc.).
- `src/settings` - Contains customise layout breakpoins, spacing, typo.
- `src/service` - Contains Api service endpoints, baseURL and http requests headers.
- `src/layouts` - Contains higher order components, Most reused layouts.
- `src/libs` - Contains min level reusable components like buttons, typo, modal boxes.
- `src/constants` - Contains app level text content configurations, colors and language preferences

## Installation Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Change directory:
   ```bash
   cd project-name
   ```
3. Install Dependencies:
   ```bash
   npm install
   ```
4. Create .env file in directory level and add this like inside .env file
   ```bash
    VITE_APP_SERVER_BASE_URL=https://panorbit.in/api/
   ```
5. Start application locally
   ```bash
   npm run dev `not(start)`
   ```
6. Application port
   ```bash
   http://localhost:5173/
   ```

### Conclusion

I focused primarily on coding, optimization, and creating well-organized components in the code. If you are interested in exploring the project further, please take a look at the source code located in the "src" directory.
