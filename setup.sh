#!/bin/bash

# Exit on error
set -e

# Ensure NVM is available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  echo "🔄 Loading NVM..."
  # Load NVM in the script
  source "$HOME/.nvm/nvm.sh"
elif [ -s "/usr/local/opt/nvm/nvm.sh" ]; then  # macOS (Homebrew) version
  echo "🔄 Loading NVM (Homebrew)..."
  source "/usr/local/opt/nvm/nvm.sh"
else
  echo "⚠️ NVM is not installed or not detected in your shell. Please install it:"
  echo "👉 https://github.com/nvm-sh/nvm#installing-and-updating"
  exit 1
fi

# Use the Node.js version specified in .nvmrc
if [ -f ".nvmrc" ]; then
  echo "📌 Using Node.js version from .nvmrc..."
  nvm use || nvm install
else
  echo "⚠️ Warning: No .nvmrc file found! Make sure you're using Node.js 18.20.3."
fi

# Check if Yarn is installed
if ! command -v yarn &> /dev/null; then
  echo "🚨 Yarn is not installed!"
  read -p "Would you like to install Yarn globally? (y/n): " install_yarn
  if [[ "$install_yarn" == "y" || "$install_yarn" == "Y" ]]; then
    corepack enable
    npm install -g yarn
    echo "✅ Yarn has been installed!"
  else
    echo "❌ Yarn is required. Please install it manually."
    exit 1
  fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
yarn install

# Done
echo "✅ Setup complete! Run 'yarn dev' to start development."