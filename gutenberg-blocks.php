<?php
/**
 * Plugin Name:       Gutenberg Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenberg_blocks_block_init() {
	register_block_type( __DIR__ . '/build/heading' );
	register_block_type( __DIR__ . '/build/flip-card' );
	register_block_type( __DIR__ . '/build/call-to-action' );
}
add_action( 'init', 'create_block_gutenberg_blocks_block_init' );


/**
 * Filters the default array of categories for block types for custom category.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_category( $block_categories, $editor_context ) {
    if ( ! empty( $editor_context->post ) ) {
		// use array_unshift instead of array_push to show category at the top
        array_push(
            $block_categories,
            array(
                'slug'  => 'gutenberg-blocks',
                'title' => __( 'Wbcom Designs', 'gutenberg-blocks' ),
                'icon'  => 'wordpress', // Dashicon (only string class for icon)
            )
        );
    }
    return $block_categories;
}
add_filter( 'block_categories_all', 'block_category', 10, 2 );
