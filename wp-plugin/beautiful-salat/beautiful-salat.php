<?php
/**
 * Plugin Name:       Beautiful Salat
 * Description:       Prayer times with unlimited color combinations, offering daily, weekly, monthly, and yearly tables.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.1.0
 * Author:            Nazim Ali
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       beautiful-salat
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function beautiful_salat_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'beautiful_salat_block_init' );
