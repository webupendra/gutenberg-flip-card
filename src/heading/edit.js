import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, level } = attributes;
    const tagName = 'h' + level;
    
    return (
        <div {...useBlockProps()}>
            <RichText      
                tagName={tagName}         
                value={title}
                onChange={(title) => setAttributes({ title })}
                placeholder={__("Enter your title", "gutenberg-blocks")}
            />
        </div>
    );
}

