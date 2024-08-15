

# Scalable Code Editor with Docker Support

## Overview

The Scalable Code Editor is designed to provide a seamless development experience, allowing users to input code and data and receive corresponding output. The editor’s standout feature is its Docker support, enabling consistent code execution across various environments. It uses docker containers to run code of different languages hence providing an isolated environment.

## Features

- **Code Input**: Users can input their code directly into the editor.
- **Data Input**: Additional data required for code execution can be provided.
- **Docker Support**: Executes code within a Docker container, ensuring consistent behavior regardless of the environment.
- **Output Display**: Displays the code-generated output for easy reference.
- **Versatility**: Supports various programming languages and code types.

## Architecture and Demo 
![image](https://github.com/user-attachments/assets/2ef67fad-2ebf-48f4-adc9-5ec2a84d3762)

![image](https://github.com/user-attachments/assets/83eed223-e77c-4f69-98e6-93f8ef72db15)

![image](https://github.com/user-attachments/assets/51cd7928-53b0-4299-aa2c-39d8c671c4e7)

## Demo Local Setup

https://github.com/user-attachments/assets/a9e43980-8362-4a41-aac6-02659e231543




## Backend Setup Using Docker

### Prerequisites

- Docker installed
- Node.js installed
- Docker Compose installed

### Setup Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AbhishekCS3459/Scalable_Code_Editor
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd Scalable_Code_Editor
   ```
3. **Navigate to the Server Directory:**
   ```bash
   cd server/docker
   ```
4. **Start the Docker Containers:**
   ```bash
   docker-compose up -d
   ```
5. **Return to the Server Directory:**
   ```bash
   cd ..
   ```
6. **Start the Server:**
   ```bash
   npm run dev
   ```

## Start the Client Locally

1. **Navigate to the Client Directory:**
   ```bash
   cd client
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Client:**
   ```bash
   npm start
   ```

