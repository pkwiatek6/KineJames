// src/utils/Helpers.ts

/**
 * Capitalizes the first letter of a string.
 * @param key The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (key: string): string => {
 //   console.log("Capitalizing:", key); // Add a log for debugging
    if (!key) return key; // Handle empty strings
    return key.charAt(0).toUpperCase() + key.slice(1);
};
