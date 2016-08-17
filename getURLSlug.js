// functions for URL Slog

export default function getURLSlog(words){
	return words
		.replace(/\s+/g, '-')
		.toLowerCase();
}