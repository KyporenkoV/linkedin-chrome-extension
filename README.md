# LIA - Linkedin extended analytics

## Overview

My Chrome Extension is a simple browser extension built using TypeScript. This extension provides extended version of free linkedin analytics.


## Features

- **Feature 1:** Display numbers of job titles of your searchers.
- **Feature 2:** Display real charts of job titles of your searchers .
- **Feature 3:** Add extra row "UNKNOWN JOB TITLES" wit inforamtion that doen's displayed by Linkedin.

<h1 align="center"><img src="https://github.com/KyporenkoV/linkedin-chrome-extension/blob/main/screenshots/screenshot.png?raw=true"></h1>

## Installation

To install the extension locally for development purposes, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/KyporenkoV/linkedin-chrome-extension
   cd linkedin-chrome-extension
   ```

2. Install the dependencies:

   ```bash
    npm install
   ```

3. Build the project:

   ```bash
    npm run build
   ```

4. Local load the extension in Chrome:

- Open Chrome and navigate to chrome://extensions/.
- Enable "Developer mode" at the top right corner.
- Click on "Load unpacked" and select the dist directory from the project.

## Development

To make changes and see them in action:

1. Make your changes in the src directory.
2. Run the build command to compile the TypeScript code and copy static files:

```bash
npm run build
```

3. Reload the extension in the Chrome extensions page to see your changes.

## Project Structure

```bash
my-chrome-extension/
│
├── dist/                   # Compiled and bundled files
│   ├── bundle.js
│   ├── manifest.json
│   ├── popup.html
│   └── icon.png
│
├── src/                    # Source files
│   ├── index.ts
│   ├── manifest.json
│   ├── popup.html
│   └── icon.png
│
├── .editorconfig           # Editor configuration
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── package.json            # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── webpack.config.js       # Webpack configuration
```

## Contributing

If you'd like to contribute to the project, please fork the repository and use a feature branch. Pull requests are welcome!

1. Fork the repository.
2. Create a new branch: git checkout -b my-feature-branch.
3. Make your changes and commit them: git commit -am 'Add new feature'.
4. Push to the branch: git push origin my-feature-branch.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please contact Viktor at viktorkyporenko@gmail.com.
