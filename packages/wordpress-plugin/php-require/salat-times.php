<?php
/**
 * Salat time helpers to get, set, update stored timings
 *
 * @package fit
 */

/**
 * Get salat timings
 */
function get_salat_timings() {
	return get_option( 'beautiful_salat_timings', null );
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'beautiful-salat/v1',
			'/timings',
			array(
				'methods'             => 'GET',
				'callback'            => 'get_salat_timings',
				'permission_callback' => '__return_true',
			)
		);
	}
);

/**
 * Checks & updates prayer times from API.
 *
 * Data is stored using the Options API as a simple key/value pair
 *
 * @param array $salat_settings from block editor.
 */
function update_salat_times( $salat_settings = array() ) {
	$ymd_stored = get_salat_timings();
	$ymd_today  = gmdate( 'Y-m-d' );

	if ( ! $ymd_stored || $ymd_stored->ymd !== $ymd_today ) {

		$url           = "https://api.aladhan.com/v1/timingsByCity?city={$salat_settings['city']}&country={$salat_settings['country']}&iso8601=true";
		$response      = wp_remote_get( $url );
		$response_body = wp_remote_retrieve_body( $response );
		$result        = json_decode( $response_body );
		$timings       = $result->data->timings;
		$ymd_salat     = substr( $timings->Fajr, 0, 10 );
		$timings->ymd  = $ymd_salat;

		update_option( 'beautiful_salat_timings', $timings );
	}

}

add_action( 'init', 'update_salat_times' );
