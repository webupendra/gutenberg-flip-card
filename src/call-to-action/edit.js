/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, PanelBody, RangeControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
    const { padding, backgroundColor, alignment, borderRadius } = attributes;

    // Define block props and merge styles like padding, border radius, and background color
    const blockProps = useBlockProps({
        style: {
            backgroundColor: backgroundColor,
            padding: padding ? `${padding}px` : undefined,
            borderRadius: borderRadius ? `${borderRadius}px` : undefined,
            textAlign: alignment ? alignment : 'none',
        }
    });

    // Template for InnerBlocks
    const wbcom_temp = [
        [ 'core/image', {} ],
        [ 'core/heading', { placeholder: 'Book Title' } ],
        [ 'core/paragraph', { placeholder: 'Summary' } ],
    ];

    return (
        <div { ...blockProps }>
            {/* BlockControls for Alignment and Toolbar */}
            <BlockControls>
                <ToolbarGroup>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={(value) =>
                            setAttributes({
                                alignment: value === undefined ? 'none' : value,
                            })
                        }
                    />
                    <ToolbarButton
                        label={__("Redirect", "gutenberg-blocks")}
                        onClick={() => alert('Toolbar Button Clicked 🚀')}
                    />
                </ToolbarGroup>
            </BlockControls>

            {/* InspectorControls for padding, border radius, and background color */}
            <InspectorControls>
                <PanelBody title={__('Call to Action', 'gutenberg-blocks')}>
                    <RangeControl
                        label={__('Padding (px)', 'gutenberg-blocks')}
                        value={parseInt(padding, 10)}
                        onChange={(value) => setAttributes({ padding: `${value}px` })}
                        min={10}
                        max={100}
                    />
                    <RangeControl
                        label={__('Border Radius (px)', 'gutenberg-blocks')}
                        value={parseInt(borderRadius, 10)}
                        onChange={(value) => setAttributes({ borderRadius: `${value}px` })}
                        min={0}
                        max={100}
                    />
                </PanelBody>
                <PanelColorSettings
                    title={__('Color Settings', 'gutenberg-blocks')}
                    colorSettings={[
                        {
                            value: backgroundColor,
                            onChange: (color) => setAttributes({ backgroundColor: color }),
                            label: __('Background Color', 'gutenberg-blocks'),
                        }
                    ]}
                />
            </InspectorControls>

            {/* InnerBlocks with template */}
            <InnerBlocks
                template={ wbcom_temp }
            />
        </div>
    );
}
