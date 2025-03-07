# My demo website

Welcome to my **Portfolio Repository**! This project showcases my skills and work in **Next.js, React.js, JavaScript, Component Libraries, and CSS Styling**. It serves as a platform to highlight my website, experience, and technical proficiency.

## 🖥️ Live Demo

🔗 [View Live Website](https://justin-demo.vercel.app/)

---

## 📌 Features

✅ Built with **Next.js** for optimized performance

✅ **React.js** for component-based UI development

✅ **Styled Components / CSS Modules / Tailwind CSS** for sleek styling

✅ Responsive and mobile-friendly design

✅ Dynamic components and UI interactions

✅ Project showcase with detailed descriptions

✅ Dark/light mode support

---

## Deployment

There are two deployment methods for this website:

1. **Vercel**
   One version of this site is simply hosted via Vercel, with GitHub integration.
   Branch builds get their own preview link, and all new commits to `main` deploy to [https://justin-demo.vercel.app/](https://justin-demo.vercel.app/).

2. **AWS**
   This method uses a few integrations:

- The repository contains a Dockerfile
- Repository is cloned on AWS EC2 Ubuntu instance
- Available at public instance address [http://3.95.168.60:3000/](http://3.95.168.60:3000/)
- **Next steps**
  - Normally I would set up GitHub Actions to SSH to EC2 and automatically clone and deploy `main`

## CI Pipeline: Linting & Type Checking

This repository uses **GitHub Actions** to automate code quality checks, ensuring our codebase remains clean and type-safe.

This workflow runs automatically in the following scenarios:

- **On every pull request** (`pull_request`): Runs for all branches to verify changes before merging.
- **On push to the `main` branch** (`push` to `main`): Ensures that committed changes maintain code quality.

### 🔍 Jobs

#### ✅ ESLint Code Check (`lint`)

This job:

1.  **Runs on Ubuntu** (`ubuntu-latest`).
2.  **Checks out the repository** (`actions/checkout@v3`).
3.  **Sets up Node.js (v18)** and caches dependencies (`actions/setup-node@v3`).
4.  **Installs dependencies** (`yarn install --frozen-lockfile`).
5.  **Runs ESLint** (`yarn lint`) to check for code style and possible errors.

#### 🏗️ TypeScript Type Checking (`type-check`)

Depends on the ESLint job (`needs: [lint]`), meaning it will only run if the lint job passes.

This job:

1.  **Runs on Ubuntu** (`ubuntu-latest`).
2.  **Checks out the repository** (`actions/checkout@v3`).
3.  **Sets up Node.js (v18)** and caches dependencies.
4.  **Installs dependencies** (`yarn install --frozen-lockfile`).
5.  **Runs TypeScript type checking** (`yarn type-check`) to ensure type safety.

## 🛠️ Technologies Used

- **Next.js** - For server-side rendering and static site generation

- **React.js** - Component-based user interfaces

- **JavaScript (ES6+)** - Core logic and functionality

- **CSS Modules / Styled Components / Tailwind CSS** - Styling and UI design

---

## 🚀 Getting Started

To set up the project locally, follow these steps:

### 🔧 Installation

#### Method 1

1.  **Clone the repository**

- `git clone`

  Enter the project folder:

- `cd justin-demo`

  Run the setup script `./setup.sh`

This will ensure you're using the correct version of Node, yarn, and install dependencies.

#### Method 2

1.  **Clone the repository**

- `git clone`

  Enter the project folder:

- `cd justin-demo`

2.  **Install dependencies**

    `yarn install`

3.  Start the dev server

    `yarn dev`

4.  **Open your browser and visit:**

    http://localhost:3000

---

## 🤝 Contributions

This is my personal portfolio, but if you have suggestions to improve it, feel free to **open an issue or submit a pull request**! 🎉

---

## 📬 Contact Me

📧 **Email:** [justinfinnegan18@gmail.com](mailto:justinfinnegan18@gmail.com)

🌐 **GitHub:** [github.com/justinfinnn](https://github.com/justinfinnn)

💼 **LinkedIn:** [linkedin.com/in/justinfinneganto/](https://www.linkedin.com/in/justinfinneganto/)

---

⭐ If you like this repository, consider giving it a **star**! ⭐
