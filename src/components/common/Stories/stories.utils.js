const { Flex } = require('components/styled/Core.styled');
const { Button } = require('react-carbonui');

// basic story slide styles
const slideStyles = {
	zIndex: 9999,
	width: '100%',
	height: '80%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
};

// prepare data for stories as a required format
export function prepareStories(story) {
	return story.list?.map(({ mediaUrl, title, emoji, text, style, actions }) => ({
		duration: 5000,
		// prepare image or video only
		...(mediaUrl
			? {
					url: mediaUrl,
			  }
			: {
					// or render custom elements
					content: ({ action }) => {
						return (
							<div
								style={{
									...slideStyles,
									// override styles from the config in API
									...story.config.styles,
									...style,
								}}
							>
								{emoji ? <h1 style={{ marginBottom: 0 }}>{emoji}</h1> : null}
								{title ? <h1 style={{ marginTop: 5 }}>{title}</h1> : null}
								{text ? <p>{text}</p> : null}

								{/* Render actions of story */}
								<Flex gap='8px'>
									{actions
										? actions?.map((action, index) => (
												<Button
													key={index}
													variant={index === 0 ? 'primary' : 'secondary'}
													size='large'
													data-testid={`stories_slide_action_${index}`}
													onClick={() => window.open(action.url, '_blank')}
													{...action.buttonProps}
												>
													{action.title}
												</Button>
										  ))
										: null}
								</Flex>
							</div>
						);
					},
			  }),
	}));
}
