/**
 * Format a number as a currency string
 * @param price The price to format
 * @param currency The currency code (default: USD)
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

/**
 * Format a rating with a specified number of decimal places
 * @param rating The rating value
 * @param decimalPlaces Number of decimal places (default: 1)
 * @returns Formatted rating string
 */
export const formatRating = (rating: number, decimalPlaces: number = 1): string => {
  return rating.toFixed(decimalPlaces);
};

/**
 * Format a date string
 * @param dateString The date string to format
 * @param options Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

/**
 * Truncate a string to a specified length and add ellipsis
 * @param str The string to truncate
 * @param maxLength Maximum length before truncation
 * @returns Truncated string
 */
export const truncateString = (str: string, maxLength: number = 100): string => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};