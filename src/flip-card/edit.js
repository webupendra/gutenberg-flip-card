import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, TextareaControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';


const ALLOWED_BLOCKS = ['core/image', 'core/paragraph', 'core/heading'];

const Edit = ({ attributes, setAttributes }) => {
    const { flipDirection, width, height, backgroundColorFront, backgroundColorBack, textColorBack, customCSS } = attributes;

    const blockProps = useBlockProps({
        className: `flip-card ${flipDirection}`,
        style: {
            width,
            height,
        }
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Flip Settings', 'gutenberg-blocks')}>
                    <SelectControl
                        label={__('Flip Direction', 'gutenberg-blocks')}
                        value={flipDirection}
                        options={[
                            { label: __('Left to Right', 'gutenberg-blocks'), value: 'left-to-right' },
                            { label: __('Right to Left', 'gutenberg-blocks'), value: 'right-to-left' },
                            { label: __('Top to Bottom', 'gutenberg-blocks'), value: 'top-to-bottom' },
                            { label: __('Bottom to Top', 'gutenberg-blocks'), value: 'bottom-to-top' },
                        ]}
                        onChange={(value) => setAttributes({ flipDirection: value })}
                    />
                    <RangeControl
                        label={__('Width (px)', 'gutenberg-blocks')}
                        value={parseInt(width, 10)}
                        onChange={(value) => setAttributes({ width: `${value}px` })}
                        min={150}
                        max={600}
                    />
                    <RangeControl
                        label={__('Height (px)', 'gutenberg-blocks')}
                        value={parseInt(height, 10)}
                        onChange={(value) => setAttributes({ height: `${value}px` })}
                        min={150}
                        max={600}
                    />
                </PanelBody>
                <PanelColorSettings
                    title={__('Color Settings', 'gutenberg-blocks')}
                    colorSettings={[
                        {
                            value: backgroundColorFront,
                            onChange: (color) => setAttributes({ backgroundColorFront: color }),
                            label: __('Front Background Color', 'gutenberg-blocks'),
                        },
                        {
                            value: backgroundColorBack,
                            onChange: (color) => setAttributes({ backgroundColorBack: color }),
                            label: __('Back Background Color', 'gutenberg-blocks'),
                        },
                        {
                            value: textColorBack,
                            onChange: (color) => setAttributes({ textColorBack: color }),
                            label: __('Back Text Color', 'gutenberg-blocks'),
                        }
                    ]}
                />
                <PanelBody title={__('Custom CSS', 'gutenberg-blocks')}>
                    <TextareaControl
                        label={__('Additional CSS', 'gutenberg-blocks')}
                        help={__('Add your custom CSS to further style the flip card.', 'gutenberg-blocks')}
                        value={customCSS}
                        onChange={(value) => setAttributes({ customCSS: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <div className="flip-card-inner">
                    <div className="flip-card-front" style={{ backgroundColor: backgroundColorFront }}>
                        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
                    </div>
                    <div className="flip-card-back" style={{ backgroundColor: backgroundColorBack, color: textColorBack }}>
                        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Edit;
