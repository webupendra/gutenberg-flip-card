import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { flipDirection, width, height, backgroundColorFront, backgroundColorBack, textColorBack } = attributes;

    const blockProps = useBlockProps.save({
        className: `flip-card ${flipDirection}`,
        style: {
            width,
            height,
        }
    });

    return (
        <div {...blockProps}>
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: backgroundColorFront }}>
                    <InnerBlocks.Content />
                </div>
                <div className="flip-card-back" style={{ backgroundColor: backgroundColorBack, color: textColorBack }}>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default Save;
