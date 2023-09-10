import { Flex } from 'components/styled/Core.styled';
import React from 'react';
import { Button } from 'react-carbonui';

function StoryContent({ title, emoji, text, style, actions, story }) {
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		action('pause');
	// 		setTimeout(() => {
	// 			action('play');
	// 		}, 2000);
	// 	}, 2000);
	// }, []);

	return (
		<div style={{ zIndex: 9999, ...story.config.styles, ...style }}>
			{emoji ? <h1 style={{ marginTop: '100%', marginBottom: 0 }}>{emoji}</h1> : null}
			{title ? <h1 style={{ marginTop: 5 }}>{title}</h1> : null}
			{text ? <p>{text}</p> : null}

			<Flex gap='8px'>
				{actions
					? actions?.map((action, index) => (
							<Button
								key={index}
								variant={index === 0 ? 'primary' : 'secondary'}
								size='large'
								data-testid={`stories_slide_action_${index}`}
								onClick={() => window.open(action.url, '_blank')}
							>
								{action.title}
							</Button>
					  ))
					: null}
			</Flex>
		</div>
	);
}

export default StoryContent;
