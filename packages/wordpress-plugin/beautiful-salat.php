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
 * @package           fit
 */

function gutenberg_examples_dynamic_render_callback($block_attributes, $content)
{
	$recent_posts = wp_get_recent_posts(array(
		'numberposts' => 1,
		'post_status' => 'publish',
	));
	if (count($recent_posts) === 0) {
		return 'No posts';
	}
	$post = $recent_posts[0];
	$post_id = $post['ID'];
	return sprintf(
		'<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
		esc_url(get_permalink($post_id)),
		esc_html(get_the_title($post_id))
	);
}

function gutenberg_examples_dynamic()
{
	// automatically load dependencies and version
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'gutenberg-examples-dynamic',
		plugins_url('build/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type('fit/beautiful-salat', array(
		'api_version' => 2,
		'editor_script' => 'gutenberg-examples-dynamic',
		'render_callback' => 'gutenberg_examples_dynamic_render_callback'
	));
}
add_action('init', 'gutenberg_examples_dynamic');
