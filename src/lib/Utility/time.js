export function secondsToDate(seconds) {
	const milliseconds = seconds * 1000; // Convert seconds to milliseconds
	return new Date(milliseconds);
}

export function formatSecondsToDate(seconds) {
	const milliseconds = seconds * 1000; // Convert seconds to milliseconds
	const date = new Date(milliseconds);

	const hours = date.getHours().toString().padStart(2, "0"); // Get hours and pad with leading zero if needed
	const minutes = date.getMinutes().toString().padStart(2, "0"); // Get minutes and pad with leading zero if needed
	const day = date.getDate().toString().padStart(2, "0"); // Get day of the month and pad with leading zero if needed
	const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (zero-based) and pad with leading zero if needed
	const year = date.getFullYear();

	return `${hours}:${minutes} - ${day}/${month}/${year}`;
}
