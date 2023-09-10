import React from 'react';
import Stories from 'react-insta-stories';
import { prepareStories } from './stories.utils';

function MyStories({ story }) {
	return (
		<div>
			{story?.enabled ? (
				<Stories
					stories={prepareStories(story)}
					defaultInterval={2000}
					width={432}
					loader={<p>Loading...</p>}
					height={550}
				/>
			) : null}
		</div>
	);
}

export default MyStories;
