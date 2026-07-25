import { t as Debug } from "./prisma__debug.mjs";
//#region node_modules/@prisma/driver-adapter-utils/dist/index.mjs
var DriverAdapterError = class extends Error {
	name = "DriverAdapterError";
	cause;
	constructor(payload) {
		super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
		this.cause = payload;
	}
};
Debug("driver-adapter-utils");
var ColumnTypeEnum = {
	Int32: 0,
	Int64: 1,
	Float: 2,
	Double: 3,
	Numeric: 4,
	Boolean: 5,
	Character: 6,
	Text: 7,
	Date: 8,
	Time: 9,
	DateTime: 10,
	Json: 11,
	Enum: 12,
	Bytes: 13,
	Set: 14,
	Uuid: 15,
	Int32Array: 64,
	Int64Array: 65,
	FloatArray: 66,
	DoubleArray: 67,
	NumericArray: 68,
	BooleanArray: 69,
	CharacterArray: 70,
	TextArray: 71,
	DateArray: 72,
	TimeArray: 73,
	DateTimeArray: 74,
	JsonArray: 75,
	EnumArray: 76,
	BytesArray: 77,
	UuidArray: 78,
	UnknownNumber: 128
};
//#endregion
export { DriverAdapterError as n, ColumnTypeEnum as t };
