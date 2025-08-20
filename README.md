# Next.js Blog Application

A modern, full-stack blog platform built with Next.js, React, and MongoDB. This project features a clean UI, blog CRUD operations, admin panel, email subscriptions, and image uploads. Designed for scalability and easy customization.

## Features

- **Modern UI/UX**: Responsive design with Tailwind CSS.
- **Blog Management**: Create, read, update, and delete blog posts.
- **Admin Dashboard**: Manage blogs and subscriptions with a dedicated admin panel.
- **Image Uploads**: Upload and display blog thumbnails.
- **Email Subscriptions**: Collect and manage subscriber emails.
- **API Routes**: RESTful API endpoints for blogs and emails.
- **MongoDB Integration**: Persistent data storage using Mongoose.
- **Notifications**: User feedback with React Toastify.

## Technology Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/) (App Router)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
  - [React Toastify](https://fkhadra.github.io/react-toastify/) (notifications)
  - [Axios](https://axios-http.com/) (HTTP requests)
  - [Next/Image](https://nextjs.org/docs/pages/api-reference/components/image) (image optimization)

- **Backend:**
  - [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
  - [MongoDB](https://www.mongodb.com/) (database)
  - [Mongoose](https://mongoosejs.com/) (ODM for MongoDB)

- **Tooling & Config:**
  - [ESLint](https://eslint.org/) (code linting)
  - [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [jsconfig.json](https://nextjs.org/docs/pages/building-your-application/configuring/jsconfig) (path aliases)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/next-blog-app.git
   cd next-blog-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Make sure MongoDB is running locally at `mongodb://127.0.0.1:27017/blog-app` or update the connection string in `lib/config/db.js`.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000] to view the app.

## Project Structure

- `/app` - Next.js app directory (pages, API routes, admin panel)
- `/Components` - Reusable React components
- `/Assets` - Static images and asset definitions
- `/lib` - Database config and Mongoose models
- `/public` - Uploaded images and static files

## Customization

- **Admin Panel:** Accessible at `/admin` for blog and subscription management.
- **Blog Details:** Each blog post has a unique page at `/blogs/[id]`.
- **Email Subscriptions:** Users can subscribe via the homepage form.

## License

This project is open-source and available for any use.
