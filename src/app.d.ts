// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			// Add any additional properties you need
			// For example, you might want to include a status code or a custom error type
			status?: number;
			type?: string;
		}
		interface Locals {
			// Define the properties you want to include in the Locals interface
			// For example, you might want to include user information or session data
			user?: {
				id: string;
				name?: string;
			};
			session?: {
				user?: {
					id: string;
				};
			};
			// Add any other properties you need
			// For example, you might want to include a database connection or a logger
			// db?: DatabaseConnection;
			// logger?: Logger;
		}
		interface PageData {
			// Define the properties you want to include in the PageData interface
			// For example, you might want to include data fetched from an API or a database
			// For example, you might want to include user information or session data
			user?: {
				id: string;
				name?: string;
			};
			session?: {
				user?: {
					id: string;
				};
			};
			// Add any other properties you need
			// For example, you might want to include a database connection or a logger
			// db?: DatabaseConnection;
			// logger?: Logger;
			// data?: any; // Replace 'any' with the actual type of your data
			// For example, you might want to include data fetched from an API or a database
			// apiData?: ApiData; // Replace 'ApiData' with the actual type of your API data
			// For example, you might want to include data fetched from an API or a database
			// dbData?: DbData; // Replace 'DbData' with the actual type of your database data
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
