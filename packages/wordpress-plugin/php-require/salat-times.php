<?php
/**
 * Salat time helpers to get, set, update stored timings
 *
 * @package fit
 */

/**
 * Extract salat time object for today from an array
 *   date->readable format: 03 Jan 2022
 *
 * @param array $arr object of prayer times.
 */
function filter_todays_timings( $arr ) {
	return gmdate( 'd M Y' ) === $arr->date->readable;
}

/**
 * Determines if need to request new data
 *
 * @param array $today_timings object for current day salat timings.
 */
function should_request_new_data( $today_timings ) {
	$today_month_year = $today_timings->date->gregorian->month->number . ' ' . $today_timings->date->gregorian->year;
	return gmdate( 'n Y' ) !== $today_month_year;
}

/**
 * Get salat timings
 */
function get_salat_timings() {
	$array_raw = get_option( 'beautiful_salat_timings', null );
	$today     = array_filter( $array_raw, 'filter_todays_timings' );
	$today     = array_pop( $today );

	return $today;
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
	$today_timings = get_salat_timings();

	if ( empty( $salat_settings ) || ! $salat_settings['city'] || ! $salat_settings['country'] ) {
		return;
	}

	if ( should_request_new_data( $today_timings ) ) {
		$url           = "https://api.aladhan.com/v1/calendarByCity?city={$salat_settings['city']}&country={$salat_settings['country']}&iso8601=true";
		$response      = wp_remote_get( $url );
		$response_body = wp_remote_retrieve_body( $response );
		$result        = json_decode( $response_body );

		$data_to_store = $result->data;
		if ( ! empty( $data_to_store ) ) {
			update_option( 'beautiful_salat_timings', $data_to_store );
		}
	}
}

add_action( 'init', 'update_salat_times' );
