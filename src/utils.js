	
function replaceSpacesWithCommas(s) {
  return s.replace(/\s/g, ", ");
}

function truncate(s, length=100, postfix='...') {
	if (s.length > length) {
    s = s.substring(0, length) + postfix;
	}
  return s;
}

export { replaceSpacesWithCommas, truncate }
