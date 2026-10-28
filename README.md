# iValidator

iValidator is a small browser-based email validation app. Enter an email address to request validation details from the [EmailValidation.io API](https://emailvalidation.io/).

## Features

- Accepts an email address using the browser's built-in email input validation.
- Sends the address to EmailValidation.io and displays the non-empty fields returned by the API.
- Shows a message if the request fails.

## Run locally

No build tools or package installation are needed.

1. Make sure the EmailValidation.io API key is configured in `script.js`.
2. Open `index.html` in a modern browser.
3. Enter an email address and select **Submit**.

The app needs an internet connection to contact the validation service. API usage may require an account and may be subject to the provider's limits and terms.

## API key security

The current app makes API requests directly from the browser, so any API key included in `script.js` is visible to users. Do not use a private or sensitive key in a public deployment. For production, route requests through a server-side endpoint and keep the key in server-side configuration.

## Project files

- `index.html` — page structure and email form.
- `style.css` — page styling.
- `script.js` — API request and result rendering.
