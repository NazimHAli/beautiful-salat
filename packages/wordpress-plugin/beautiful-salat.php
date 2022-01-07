<?php
/**
 * Plugin Name:       Beautiful Salat
 * Description:       Simple, beautiful, lightweight prayer times plugin using Gutenberg blocks for easy editing.
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           2.0.0
 * Author:            Nazim Ali
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       beautiful-salat
 *
 * @package fit
 */

/**
 * Helpers to generate clent side HTML
 */
require __DIR__ . '/php-require/html-helpers.php';

/**
 * Salat times methods to get, update, and set data
 */
require __DIR__ . '/php-require/salat-times.php';

/**
 * Add editor stylesheet
 */
function enqueue_custom_editor_styles() {
	wp_enqueue_style( 'beautiful-salat-panels', plugin_dir_url( __FILE__ ) . '/build/index.css', array(), true );

}
add_action( 'admin_enqueue_scripts', 'enqueue_custom_editor_styles' );

/**
 * Callback required for dynamic blocks
 *  1- Checks DB if need to request new prayer times
 *  2- Updates the stored values if needed
 *  3- Generates HTML for the client
 *
 * @param object $block_attributes passed down attributes.
 * @param object $content dynamic block content.
 */
function prayer_timings_call_back( $block_attributes, $content ) {
	update_salat_times( $block_attributes['salatSettings'] );
	$salat_times = get_salat_timings();

	return salat_html_table( $salat_times->timings, $block_attributes );
}

/**
 * Register dynamic block for server side rendering
 */
function register_dynamic_block() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'prayer_timings_call_back',
		)
	);

}
add_action( 'init', 'register_dynamic_block' );
