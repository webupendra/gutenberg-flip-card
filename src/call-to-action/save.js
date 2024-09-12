/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
    const { height, backgroundColor, alignment } = attributes;

    // Define block props with the style applied to the wrapper
    const blockProps = useBlockProps.save({
        style: {
            backgroundColor: backgroundColor,
            height: height ? `${height}px` : undefined,
            textAlign: alignment ? alignment : 'none',
        }
    });

    return (
        <div { ...blockProps }>
            {/* Save InnerBlocks content */}
            <InnerBlocks.Content />
        </div>
    );
}
