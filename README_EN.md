## 🌐 [Versão em Português do README](README.md)

# Cypress, from Zero to the Cloud ☁️

Sample project for the **Cypress, from Zero to the Cloud** course by the Talking About Testing School.

This repository demonstrates how to create, organize, and run automated web interface tests using the Cypress framework, from local setup to integration with CI/CD pipelines and Cypress Cloud.

---

## 🔨 Project Features

- Complete end-to-end (E2E) tests for a customer service web application (CAC TAT)
- Coverage of all core form flows: filling, validation, product selection, support types, uploads, links, and messages
- Custom commands for easy maintenance and code reuse
- Test execution in multiple environments: local, mobile, CI/CD, and cloud (Cypress Cloud)
- Ready-to-use integration with GitHub Actions pipelines

### Visual Example of the Project

The sample application features a contact form with required fields, product selection, support types, file upload, and a privacy policy link.



---

## ✔️ Techniques and Technologies Used

| Technology        | Version    | Purpose                              |
|-------------------|------------|--------------------------------------|
| Cypress           | 14.4.1     | Main E2E testing framework           |
| Node.js           | 20+        | Runtime environment                  |
| npm               | 10+        | Package and script management        |
| GitHub Actions    | —          | Continuous Integration pipeline      |
| Cypress Cloud     | —          | Cloud test management and analytics  |
| JavaScript ES6+   | —          | Test and configuration logic         |

---

## 📁 Project Structure

```
.
├── LICENSE
├── README.md
├── README_EN.md
├── cypress/
│   ├── e2e/
│   │   ├── CAC-TAT.cy.js        # Main application E2E tests
│   │   └── privacyPolicy.cy.js  # Privacy policy E2E tests
│   ├── fixtures/
│   │   └── example.json         # Example data for uploads and fixtures
│   └── support/
│       ├── commands.js          # Cypress custom commands
│       └── e2e.js               # Global test support configuration
├── cypress.config.js            # Cypress configuration file
├── lessons/                     # Course materials and lessons
├── package.json                 # Project dependencies and scripts
├── package-lock.json
├── src/
│   ├── index.html               # Main application page
│   ├── privacy.html             # Privacy policy page
│   └── script.js                # Application logic
└── .github/
    └── workflows/
        └── ci.yml               # GitHub Actions CI workflow
```
[See full structure][1]

---

## 🛠️ How to Run the Project Locally

1. **Ensure Node.js is installed**:
   - [Node.js](https://nodejs.org/) is required. Check your version with:
     ```
     node -v
     ```
   - If not installed, download and install the recommended version from the official site.

2. **Clone the Repository**:
   ```
   git clone 
   cd cypress-do-zero-a-nuvem
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Open the application locally**:
   - Open `src/index.html` in your browser, or use a local server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode).

5. **Run the tests**:

   - **Interactive mode (Cypress App):**
     ```
     npm run cy:open
     ```
   - **Headless mode (CLI):**
     ```
     npm test
     ```
   - **Simulate mobile (interactive):**
     ```
     npm run cy:open:mobile
     ```
   - **Simulate mobile (headless):**
     ```
     npm run test:mobile
     ```
   - **Run on Cypress Cloud:**
     ```
     npm run test:cloud
     ```

---

## 🌐 Deploy & Continuous Integration

### Running in CI/CD (GitHub Actions)

This project is pre-configured for automated test execution in CI/CD pipelines using GitHub Actions. The `.github/workflows/ci.yml` file handles:

- Dependency installation
- Cypress tests execution in headless mode
- (Optional) Integration with Cypress Cloud for advanced reporting and analytics

**How it works:**
- Every push triggers the workflow and runs all tests automatically.
- Results are available in GitHub (Actions tab) and in Cypress Cloud (if configured).

**For Cypress Cloud:**
- Add the `CYPRESS_RECORD_KEY` variable to your repository secrets.
- The `npm run test:cloud` script will execute and send results to the cloud.

**Sample workflow configuration:**
```
name: End-to-end tests
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Cypress run
        uses: cypress-io/github-action@v6
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
        with:
          command: npm run test:cloud
```

---

## 📄 Key File Details

| File                           | Purpose                                             |
|--------------------------------|-----------------------------------------------------|
| cypress/e2e/CAC-TAT.cy.js      | Main E2E tests for the application                  |
| cypress/e2e/privacyPolicy.cy.js| Standalone privacy policy page tests                |
| cypress/support/commands.js    | Custom command `fillMandatoryFieldsAndSubmit`       |
| cypress.config.js              | Cypress config (viewport, baseUrl, timeouts, Cloud) |
| src/index.html / privacy.html  | Application HTML pages                              |
| src/script.js                  | Form validation, messages, and business rules       |
| .github/workflows/ci.yml       | GitHub Actions workflow for CI/CD                   |

---

## 💡 Execution Possibilities

- **Local:** Run tests during development, simulating different devices.
- **CI/CD:** Ensure continuous quality by running tests on every code change.
- **Cypress Cloud:** Analyze runs, identify flaky tests, and share results with your team.
- **Customization:** Adapt commands, scripts, and configs for your real-world project needs.
