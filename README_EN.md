## 🌐 [Portuguese Version of README](README.md)

# Cypress, from Zero to the Cloud ☁️

Sample project for the **Cypress, from Zero to the Cloud** course by the Talking About Testing School.

This repository demonstrates how to create, organize, and run automated web interface tests using the Cypress framework, from local setup to integration with CI/CD pipelines and Cypress Cloud[2][3][4].

---

## 🔨 Project Features

- **Complete end-to-end (E2E) tests** for a customer service web application (CAC TAT)
- **Coverage of all main form flows:** filling, validation, product selection, support types, uploads, links, and messages
- **Custom commands** for easy maintenance and code reuse
- **Test execution in multiple environments:** local, mobile, CI/CD, and cloud (Cypress Cloud)
- **Ready-to-use integration with GitHub Actions pipelines**

### Visual Example

The sample application features a contact form with required fields, product selection, support types, file upload, and a privacy policy link[1][2].

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

1. **Make sure Node.js is installed:**
   - [Node.js](https://nodejs.org/) is required. Check your version with:
     ```
     node -v
     ```
   - If not installed, download and install the recommended version from the official site.

2. **Clone the repository:**
   ```
   git clone https://github.com/your-username/cypress-do-zero-a-nuvem.git
   cd cypress-do-zero-a-nuvem
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Open the application locally:**
   - **Directly in the browser:**  
     Open the file `src/index.html` in your browser.
   - **With a local server (optional):**
     - **Python:**  
       ```
       python -m http.server 8000
       ```
       Access `http://localhost:8000/src/index.html` in your browser.
     - **Live Server (VSCode):**  
       Install the "Live Server" extension and open `src/index.html` with it.

5. **Run the tests:**

   - **Interactive mode (Cypress App):**
     ```
     npm run cy:open
     ```
   - **Headless mode (command line):**
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
   - **Cloud execution (Cypress Cloud):**
     ```
     npm run test:cloud
     ```
     > **NOTE:** To send results to the cloud, configure the `CYPRESS_RECORD_KEY` environment variable.

---

## 🌐 Deploy & Continuous Integration

### Running in CI/CD (GitHub Actions)

The project is pre-configured for automated test execution in CI/CD pipelines using GitHub Actions. The `.github/workflows/ci.yml` file performs:

- **Dependency installation**
- **Cypress tests execution in headless mode**
- **(Optional) Integration with Cypress Cloud for advanced reporting and analytics**

**How it works:**
- **Every push** triggers the workflow and runs all tests automatically.
- **Results** are available on GitHub (Actions tab) and in Cypress Cloud (if configured).

**For Cypress Cloud:**
- **Add the `CYPRESS_RECORD_KEY` variable** to your repository secrets.
- **The script `npm run test:cloud`** will execute and send results to the cloud.

**Sample workflow configuration:**
```yaml
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
          CYPRESS_RECORD_KEY: ${{ secrets.CY7230_RECORD_KEY }}
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
| cypress.config.js              | Cypress config (viewport, baseUrl, timeouts, etc)   |
| src/index.html / privacy.html  | Application HTML pages                              |
| src/script.js                  | Form validation, messages, and business rules       |
| .github/workflows/ci.yml       | GitHub Actions workflow for CI/CD                   |

---

## 💡 Execution Possibilities

- **Local:** Run tests during development, simulating different devices.
- **CI/CD:** Ensure continuous quality by running tests on every code change.
- **Cypress Cloud:** Analyze runs, identify flaky tests, and share results with your team.
- **Customization:** Adapt commands, scripts, and configs for your real-world project needs.

---

> **Tip:** To run tests in CI, remember to start the local server before the tests if you use Cypress with `baseUrl` set to `http://localhost:8080` (or another port).  
> **Example in the workflow:**  
> ```yaml
> - name: Start local server
>   run: python -m http.server 8080 &
> ```
> And add the `wait-on: 'http://localhost:8080'` parameter to the Cypress action to ensure the server is ready before tests.
-hero/