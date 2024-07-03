<?php
/**
 * HTML helpers
 *
 * @package fit
 */

/**
 * Get key/value if exists or returns null
 *
 * @param string $key name of the key.
 * @param array  $array array to evaluate.
 */
function get_array_value( $key, $array ) {
	if ( array_key_exists( $key, $array ) ) {
		return $array[ $key ];
	}

	return null;
}

/**
 * Generates HTML for client side
 *
 * @param array  $salat_times an array of prayer times.
 * @param object $block_attributes user settings from the editor.
 */
function salat_html_table( $salat_times = array(), $block_attributes = object ) {
	if ( empty( $salat_times ) ) {
		return;
	}

	// Format prayer times to GMT hour + AM/PM.
	// Example: 05:37 AM.
	$fajr    = date_format( date_create( substr( $salat_times->Fajr, 0, 25 ) ), 'h:i A' );
	$sunrise = date_format( date_create( substr( $salat_times->Sunrise, 0, 25 ) ), 'h:i A' );
	$dhuhr   = date_format( date_create( substr( $salat_times->Dhuhr, 0, 25 ) ), 'h:i A' );
	$asr     = date_format( date_create( substr( $salat_times->Asr, 0, 25 ) ), 'h:i A' );
	$maghrib = date_format( date_create( substr( $salat_times->Maghrib, 0, 25 ) ), 'h:i A' );
	$isha    = date_format( date_create( substr( $salat_times->Isha, 0, 25 ) ), 'h:i A' );

	// CSS styling.
	$show_all_styling     = $block_attributes['showAllStyling'];
	$show_container_style = $block_attributes['showContainerStyle'];
	$show_head_style      = $show_all_styling && $block_attributes['showHeaderStyle'];

	$body_css_class = $show_container_style ? "class='salat-table-body'" : null;
	$head_css_class = $show_head_style ? "class='salat-table-header'" : null;

	$container_css       = $block_attributes['showBoxShadow'] ? 'salat-table-shadow' : null;
	$container_css_class = $show_container_style ? "class='$container_css'" : null;

	$head       = null;
	$head_title = $block_attributes['headerTitle'];

	$head_inline_bg_color = get_array_value( 'headerBackgroundColor', $block_attributes ) ? "background-color: {$block_attributes['headerBackgroundColor']};" : null;
	$head_inline_color    = get_array_value( 'headerTitleColor', $block_attributes ) ? " color: {$block_attributes['headerTitleColor']};" : null;
	$head_inline_style    = ( $head_inline_bg_color || $head_inline_color ) && $show_all_styling ? "style='{$head_inline_bg_color}{$head_inline_color}'" : null;
	$container_max_width  = $block_attributes['maxWidth'] ? "style='max-width: {$block_attributes['maxWidth']};'" : null;

	if ( $block_attributes['showHeader'] ) {
		$head = <<<HTML
            <thead $head_css_class $head_inline_style>
            <tr>
                <th>$head_title</th>
            </tr>
        </thead>
    HTML;
	}

	return <<<HTML
        <div $container_css_class $container_max_width>
            <table class="salat-table">
                $head
                <tbody $body_css_class>
                    <tr>
                        <th>Fajr:</th> 
                        <td>$fajr</td>
                    </tr>
                    <tr>
                        <th>Sunrise:</th> 
                        <td>$sunrise</td>
                    </tr>
                    <tr>
                        <th>Dhuhr:</th> 
                        <td>$dhuhr</td>
                    </tr>
                    <tr>
                        <th>Asr:</th> 
                        <td>$asr</td>
                    </tr>
                    <tr>
                        <th>Maghrib:</th> 
                        <td>$maghrib</td>
                    </tr>
                    <tr>
                        <th>Isha:</th> 
                        <td>$isha</td>
                    </tr>
                </tbody>
            </table >
        </div>
    HTML;
}
