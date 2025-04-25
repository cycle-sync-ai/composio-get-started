# Composio GitHub Integration Example

This repository demonstrates how to use Composio to integrate with GitHub API and perform actions like retrieving the authenticated user's information.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- OpenAI API key
- Composio account and API key

## Installation

1. Clone this repository:

```bash
git clone https://github.com/cycle-sync-ai/composio-get-started
```

```bash
cd composio-get-started
```

```bash
npm install
```

2. Create a `.env` file in the root directory with your API keys:

```bash
echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
echo "COMPOSIO_API_KEY=your_composio_api_key_here" >> .env
```

## Usage

This example demonstrates how to use Composio's toolsets with OpenAI to interact with GitHub. The sample code retrieves the authenticated user's GitHub username.

Run the example:

```bash
npm run dev
```

## How It Works

The application uses Composio's OpenAIToolSet to provide GitHub integration capabilities to OpenAI models. The code:

1. Initializes the Composio toolset
2. Configures the OpenAI client
3. Requests specific GitHub actions (in this case, `GITHUB_GET_THE_AUTHENTICATED_USER`)
4. Sends a prompt to OpenAI with the tools attached
5. Handles the tool call response

## Documentation

For more detailed information about Composio, check out the official documentation:

- [Installation Guide](https://docs.composio.dev/getting-started/installation)
- [Quickstart Guide](https://docs.composio.dev/getting-started/quickstart)

## Additional Resources

- [Composio Documentation](https://docs.composio.dev/)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [GitHub API Documentation](https://docs.github.com/en/rest)
