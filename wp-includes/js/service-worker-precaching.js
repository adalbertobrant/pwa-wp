/* global PRECACHE_ENTRIES */
{
	wp.serviceWorker.precaching.precache( PRECACHE_ENTRIES );

	// @todo Should not these parameters be specific to each entry as opposed to all entries?
	// @todo Should not the strategy be tied to each entry as well?
	// @todo Use networkFirst instead of cacheFirst when WP_DEBUG.
	wp.serviceWorker.precaching.addRoute( {
		ignoreUrlParametersMatching: [
			/^utm_/,
			/^ver$/
		]
		// @todo Add urlManipulation which allows for the list of ignoreUrlParametersMatching to be supplied with each entry.
	} );
}
