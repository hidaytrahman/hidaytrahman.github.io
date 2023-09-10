import React from 'react';
import Stories from 'react-insta-stories';
import { Button } from 'react-carbonui';
import { Flex } from 'components/styled/Core.styled';

const slideStyles = {
	zIndex: 9999,
	width: '100%',
	height: '80%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-around',
};

function MyStories({ story }) {
	function prepareStories(story) {
		const preparedList = story.list?.map(({ mediaUrl, title, emoji, text, style, actions }) => {
			return {
				duration: 5000,
				// prepare image or video only
				...(mediaUrl
					? {
							url: mediaUrl,
					  }
					: {
							content: ({ action }) => {
								console.log({ action });
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
			};
		});
		console.log({ preparedList });
		return preparedList;
	}

	return (
		<div>
			{story?.enabled ? (
				<Stories
					stories={[
						...prepareStories(story),
						// {
						// 	url: 'https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/fdixtnbyaqnbe6bcpxtj',
						// 	duration: 5000,
						// 	header: {
						// 		heading: 'Hidayt Rahman',
						// 		subheading: 'Posted 30m ago',
						// 		profileImage: profile.avatar_url,
						// 	},
						// 	seeMore: ({ close }) => {
						// 		return <div onClick={close}>Hello, click to close this.</div>;
						// 	},
						// },
						// {
						// 	duration: 5000,
						// 	content: (props) => (
						// 		<div style={{ background: 'pink', padding: 20 }}>
						// 			<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
						// 			<h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
						// 			<p>
						// 				Everyone wants me to be a morning person. I could be one, only if morning began
						// 				after noon, Its Sunday!
						// 			</p>
						// 			<Button variant='secondary' size='large'>
						// 				Why
						// 			</Button>
						// 		</div>
						// 	),
						// 	header: {
						// 		heading: 'Hidayt Rahman',
						// 		subheading: 'Posted 30m ago',
						// 		profileImage: profile.avatar_url,
						// 	},
						// },
						// {
						// 	url: 'https://www.yonex.com/media/wysiwyg/Athletes/Badminton/Taufik_Hidayat_810x540.jpg',
						// },
						// {
						// 	url: 'https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/fdixtnbyaqnbe6bcpxtj',
						// },
					]}
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
