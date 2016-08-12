// functions for URL Slog

function getURLSlog(words){
	return words
		.replace(/\s+/g, '-')
		.toLowerCase();
}