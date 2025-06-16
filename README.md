// README.md
# OpenMRS Cypress Test Automation Framework

## Overview
Comprehensive test automation framework for OpenMRS Demo using Cypress with Page Object Model pattern.

## Features
- ✅ Login functionality testing
- ✅ Patient registration and search
- ✅ Page Object Model implementation
- ✅ Custom commands and utilities
- ✅ Test data management with fixtures
- ✅ Cross-browser testing support
- ✅ CI/CD integration
- ✅ Detailed reporting with screenshots/videos
- ✅ Docker support

## Setup Instructions

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
npm install
```

### Running Tests
```bash
# Open Cypress Test Runner
npm run cypress:open

# Run all tests headlessly
npm run cypress:run

# Run specific test suites
npm run test:smoke
npm run test:login
npm run test:patient

# Run with specific browser
npm run cypress:run:chrome
npm run cypress:run:firefox
```

### Configuration
Edit `cypress.config.js` to modify:
- Base URL
- Timeouts
- Browser settings
- Environment variables

### Test Structure
```
cypress/
├── e2e/
│   ├── smoke/           # Smoke tests
│   ├── login/           # Login functionality
│   └── patient/         # Patient management
├── fixtures/            # Test data
├── support/
│   ├── pages/          # Page Object Models
│   ├── commands.js     # Custom commands
│   └── e2e.js         # Global config
└── reports/            # Test reports
```

### CI/CD
- GitHub Actions workflow included
- Docker support for containerized testing
- Automated test reporting
- Cross-browser testing matrix

### Best Practices
1. Use Page Object Model for maintainable tests
2. Keep test data in fixtures
3. Use custom commands for common actions
4. Implement proper waits and assertions
5. Clean up test data after tests
6. Use descriptive test names
7. Group related tests in describe blocks
