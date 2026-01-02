# Founder OS Backend

Production-ready Express.js backend application using MVC (Model-View-Controller) architecture.

## 📁 Folder Structure

```
founder-os-be/
├── index.js                 # Main application entry point
├── package.json            # Project dependencies and scripts
├── .env.example            # Example environment variables
├── .gitignore             # Git ignore rules
│
├── configs/               # Configuration files
│   └── server.config.js   # Server configuration
│
├── controllers/           # Route controllers (business logic)
│   └── health.controller.js
│
├── middlewares/           # Custom middleware functions
│   ├── errorHandler.js    # Global error handler
│   └── requestLogger.js   # Request logging middleware
│
├── models/               # Data models
│   └── User.model.js     # Sample user model
│
├── routes/               # API routes
│   ├── index.js          # Routes index (mounts all routes)
│   └── health.routes.js  # Health check routes
│
└── helpers/              # Utility/helper functions
    └── response.helper.js # Response formatting helpers
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd founder-os-be
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=3000
NODE_ENV=development
```

### Running the Application

**Development mode** (with auto-restart):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on `http://localhost:3000` (or your configured PORT).

## 📚 API Endpoints

### Health Check
- **GET** `/` - Welcome message
- **GET** `/api/health` - Health check endpoint
- **GET** `/api/info` - API information

### Example Response
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-02T15:47:00.000Z"
}
```

## 🏗️ Architecture

### MVC Pattern

This application follows the **Model-View-Controller** pattern:

- **Models** (`/models`) - Data structures and database interactions
- **Views** (JSON responses) - API responses in JSON format
- **Controllers** (`/controllers`) - Business logic and request handling
- **Routes** (`/routes`) - API endpoint definitions

### Key Components

1. **index.js** - Application entry point
   - Loads environment variables
   - Initializes Express
   - Configures middleware (CORS, JSON parser)
   - Mounts routes
   - Sets up error handling
   - Starts server

2. **Routes** - Define API endpoints
   - Map URLs to controller functions
   - Grouped by feature/resource

3. **Controllers** - Handle business logic
   - Process requests
   - Interact with models
   - Send responses

4. **Middlewares** - Request/response processors
   - Authentication, logging, error handling
   - Execute before route handlers

5. **Models** - Data layer
   - Define data structures
   - Database operations (when integrated)

6. **Configs** - Application configuration
   - Environment-based settings
   - Centralized configuration management

7. **Helpers** - Utility functions
   - Reusable helper functions
   - Common operations

## 📦 Dependencies

### Production
- **express** - Fast, minimalist web framework
- **cors** - Enable CORS for cross-origin requests
- **dotenv** - Load environment variables from .env

### Development
- **nodemon** - Auto-restart server on file changes

## 🛡️ Error Handling

The application includes a global error handler that:
- Catches all errors in the application
- Logs errors for debugging
- Sends appropriate JSON error responses
- Includes stack traces in development mode

## 🔧 Configuration

Configuration is managed through:
- **Environment variables** - `.env` file
- **Config files** - `/configs` directory

## 📝 Code Style

- Clean and minimal code
- Well-commented for clarity
- CommonJS module system
- Consistent naming conventions
- Separation of concerns

## 🚦 Next Steps

To extend this application:

1. **Add Database Integration**
   - Install ORM (Mongoose, Sequelize, Prisma)
   - Update models with database operations
   - Add database configuration

2. **Add Authentication**
   - Implement JWT or session-based auth
   - Add authentication middleware
   - Create user registration/login routes

3. **Add Validation**
   - Install validation library (joi, express-validator)
   - Add input validation middleware
   - Validate request data

4. **Add Testing**
   - Install testing framework (Jest, Mocha)
   - Write unit and integration tests
   - Set up CI/CD pipeline

5. **Add Documentation**
   - Integrate Swagger/OpenAPI
   - Document all API endpoints
   - Add API versioning

## 📄 License

ISC

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.