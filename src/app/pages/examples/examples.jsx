import React, { ExoticComponent, memo } from 'react';


/**
 * Component Class {Examples}
 * which is exported with namespace to support storybook.
 */
export const ExamplesComponent = memo( props => {
	return (
		<div className={'page-examples'}>
			My examples page.
		</div>
	);
} );

export default ExamplesComponent;
