//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-fFcbw6nI.js
var manifest = { "e6ba7e0004e7dc7106d6f0c5a4d10c4f820a29232c7716f1e06463f241904f6e": {
	functionName: "submitInquiry_createServerFn_handler",
	importer: () => import("./_ssr/inquiry-DnrfYE0A.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
