# Orders and Products Management

This project is a web application for managing orders and products using Next.js, Redux, and a custom Express.js server.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Concurrently](https://www.npmjs.com/package/concurrently)
- [Framer Motion](https://www.framer.com/api/motion/)

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/nikolaefpost/orders_products_test.git
    cd orders_products
    ```

2. **Install the dependencies:**
    ```sh
    npm install
    ```

3. **Run the development server:**
    ```sh
    npm run dev
    ```

   This command uses `concurrently` to run both the Next.js development server and the Express.js server simultaneously.

4. **Build the project:**
    ```sh
    npm run build
    ```

5. **Start the production server:**
    ```sh
    npm start
    ```

## Project Structure

- **app**: Contains application components.
- **assets**: Static assets like images and styles.
- **components**: Reusable React components.
- **helpers**: Helper functions.
- **hooks**: Custom React hooks.
- **public**: Public files served by Next.js.
- **server**: Custom Express.js server and related files.
- **store**: Redux store configuration and slices.
- **temp**: Temporary files.
- **types**: TypeScript types.

## Notes

- [Framer Motion](https://www.framer.com/api/motion/) is used for animations in the application.
- A custom [Node.js](https://nodejs.org/) server is employed for data transfer to demonstrate the asynchronous capabilities of the application.

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/api/motion/)

## License

This project is licensed under the MIT License.
