# ✨ Documentation

Getting-started guidance, feature details, and API reference documentation.

### Getting Started

> [!TIP]
>
> #### Install Prerequisites:
>
> - [Node LTS version](https://nodejs.org/en/blog/release/v22.15.0/)
> - [pnpm](https://pnpm.io/installation)
> - [Git](https://git-scm.com/)
> - [Docker](https://www.docker.com/get-started/)
> - [Docker Compose](https://docs.docker.com/compose/)

```bash
# Clone the repository
git clone https://github.com/expertness/standard-docs-vitepress-project-layout.git my-docs

# Navigate to project directory
cd my-docs

# Install dependencies
pnpm install

# Start development server
pnpm docs:dev
```

### Available Scripts

| Command                 | Description                |
| ----------------------- | -------------------------- |
| \`pnpm docs:dev\`       | Start development server   |
| \`pnpm docs:build\`     | Build for production       |
| \`pnpm docs:preview\`   | Preview production build   |
| \`pnpm prettier:write\` | Run Prettier over the code |
| \`pnpm lint\`           | Lint code                  |

## 📑 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
