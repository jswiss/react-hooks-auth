import * as validator from 'validator';

/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 */

export const apiRequest = async (
	url: string,
	method: string,
	bodyParams?: { email: string; password: string }
): Promise<any> => {
	const response = await fetch(url, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: bodyParams ? JSON.stringify(bodyParams) : undefined,
	});

	return await response.json();
};

/** Handle form validation for the login form
 * @param email - user's auth email
 * @param password - user's auth password
 * @param setError - function that handles updating error state value
 */

export const validateLoginForm = (
	email: string,
	password: string,
	setError: (error: string | null) => void
): boolean => {
	// check for undefined or empty input fields
	if (!validator.isEmail(email)) {
		setError('Please enter a valid email address');
		return false;
	}
	return true;
};
