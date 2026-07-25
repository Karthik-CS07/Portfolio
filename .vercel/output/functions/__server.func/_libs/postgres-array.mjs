import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/postgres-array/index.js
var require_postgres_array = /* @__PURE__ */ __commonJSMin(((exports) => {
	var BACKSLASH = "\\";
	var DQUOT = "\"";
	var LBRACE = "{";
	var RBRACE = "}";
	var LBRACKET = "[";
	var EQUALS = "=";
	var COMMA = ",";
	/** When the raw value is this, it means a literal `null` */
	var NULL_STRING = "NULL";
	/**
	* Parses an array according to
	* https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
	*
	* Trusts the data (mostly), so only hook up to trusted Postgres servers.
	*/
	function makeParseArrayWithTransform(transform) {
		const haveTransform = transform != null;
		return function parseArray(str) {
			const rbraceIndex = str.length - 1;
			if (rbraceIndex === 1) return [];
			if (str[rbraceIndex] !== RBRACE) throw new Error("Invalid array text - must end with }");
			let position = 0;
			if (str[position] === LBRACKET) position = str.indexOf(EQUALS) + 1;
			if (str[position++] !== LBRACE) throw new Error("Invalid array text - must start with {");
			const output = [];
			let current = output;
			const stack = [];
			let currentStringStart = position;
			let currentString = "";
			let expectValue = true;
			for (; position < rbraceIndex; ++position) {
				let char = str[position];
				if (char === DQUOT) {
					currentStringStart = ++position;
					let dquot = str.indexOf(DQUOT, currentStringStart);
					let backSlash = str.indexOf(BACKSLASH, currentStringStart);
					while (backSlash !== -1 && backSlash < dquot) {
						position = backSlash;
						const part = str.slice(currentStringStart, position);
						currentString += part;
						currentStringStart = ++position;
						if (dquot === position++) dquot = str.indexOf(DQUOT, position);
						backSlash = str.indexOf(BACKSLASH, position);
					}
					position = dquot;
					const part = str.slice(currentStringStart, position);
					currentString += part;
					current.push(haveTransform ? transform(currentString) : currentString);
					currentString = "";
					expectValue = false;
				} else if (char === LBRACE) {
					const newArray = [];
					current.push(newArray);
					stack.push(current);
					current = newArray;
					currentStringStart = position + 1;
					expectValue = true;
				} else if (char === COMMA) expectValue = true;
				else if (char === RBRACE) {
					expectValue = false;
					const arr = stack.pop();
					if (arr === void 0) throw new Error("Invalid array text - too many '}'");
					current = arr;
				} else if (expectValue) {
					currentStringStart = position;
					while ((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex) ++position;
					const part = str.slice(currentStringStart, position--);
					current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
					expectValue = false;
				} else throw new Error("Was expecting delimeter");
			}
			return output;
		};
	}
	var parseArray = makeParseArrayWithTransform();
	exports.parse = (source, transform) => transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}));
//#endregion
export { require_postgres_array as t };
