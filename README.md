# Project Description: Angular E-commerce Store

This project is a modern, responsive e-commerce storefront application built with Angular 19, leveraging the latest features and best practices for a fast, maintainable, and scalable solution. The application provides a user-friendly interface for browsing products, adding them to a shopping cart, and viewing the cart with an order summary.

## Core Technologies

- **Angular 19:** Utilizes the Angular framework for building a dynamic and single-page application (SPA).

- **Tailwind CSS:** Employs Tailwind CSS for rapid and consistent styling, ensuring a visually appealing and responsive design.

- **Angular Router**: Implements Angular's routing module for seamless navigation between different views, such as the product list and cart pages.

- **Signals and Computed Signals:** Leverages Angular signals for reactive state management, enhancing performance and simplifying data flow.

- **Standalone Components:** Adopts Angular standalone components for improved modularity, code reusability, and simplified application architecture.

- **Dependency Injection with inject():** Utilizes the inject() function for streamlined dependency injection, promoting cleaner and more testable code.

## Current Features

- **Product List Page:** Displays a catalog of products with relevant details.

- **Add to Cart Functionality:** Enables users to add products to their shopping cart.

- **Cart Page:** Shows the products currently in the cart with an order summary.

- **Header Cart Button:** A cart icon in the header allows quick access to the cart page.

  ![Product list page](/src/assets/images/image.png)

  ![Cart & order summary](/src/assets/images/image-1.png)

## Todo / Planned Features

1. Enhanced Add to Cart Button:

   - Transform the "Add to Cart" button into a quantity counter after the first click.
   - Display the quantity (starting at 1) and provide "+" and "-" buttons for adjusting the quantity directly from the product list page.

2. Cart Page Quantity Display: Consolidate duplicate products in the cart page and display the quantity of each product selected by the user.

3. Add unit test cases.

4. UX/UI Improvements:

   - Further styling enhancements to improve the overall user experience and visual appeal of the application.

## Goals

- To create a fully functional and visually appealing e-commerce storefront.

- To leverage modern Angular features for performance and maintainability.

- To provide a seamless and intuitive shopping experience for users.

- To create a codebase that is easy to extend and maintain for future features.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

[Tailwind CSS](https://v1.tailwindcss.com/)

[Faker API](https://fakestoreapi.com/)
