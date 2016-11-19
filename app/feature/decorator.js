function taskCreateLog($delegate, $log) {
	let createTask = $delegate.createTask;

	$delegate.createTask = function(items, newItem, $localStorage) {
		$log.info("Task was created " + new Date());
		return createTask();
	}
	return $delegate;
}