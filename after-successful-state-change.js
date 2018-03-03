module.exports = function afterSuccessfulStateChange(stateRouter, cb) {
	const cancelFunctions = [
		once(stateRouter, `stateChangeEnd`, cb),
		once(stateRouter, `stateChangeError`, cancel),
		once(stateRouter, `stateError`, cancel),
		once(stateRouter, `routeNotFound`, cancel),
		once(stateRouter, `stateChangeCancelled`, cancel),
	]

	function cancel() {
		cancelFunctions.forEach(fn => fn())
	}
}

function once(emitter, event, listener) {
	emitter.once(event, listener)
	return () => emitter.removeListener(event, listener)
}
