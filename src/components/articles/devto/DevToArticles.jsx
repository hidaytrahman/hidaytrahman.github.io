import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Articles } from './DevToArticles.styles';
import moment from 'moment';

function DevToArticles() {
	// https://dev.to/api/articles?username=hidaytrahman

	const {
		isLoading,
		error,
		data: articles,
	} = useQuery(
		{queryKey: ['articleData'], 
			queryFn: () =>
		fetch('https://dev.to/api/articles?username=hidaytrahman&per_page=6').then((res) => res.json())
		}
	);

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<Articles>
			{articles?.map((article) => (
				<article className='article_box' key={article.id}>
					<a href={article.url} className='article_box_header_link' target='_blank' rel='noreferrer'>
						<span>{article.title}</span>
					</a>
					<div className='article_box_meta'>
						{article.description}
						<a href={article.url} className='article_box_author_link' target='_blank' rel='noreferrer'>
							Read more [+]
						</a>

						<time className='article_box_time'>
							Published: {moment(article.published_at).format('MMM Do YY')}
						</time>
					</div>
				</article>
			))}

			<article className='article_box'>
				<a
					href='https://dev.to/hidaytrahman/'
					className='article_box_header_link'
					target='_blank'
					rel='noreferrer'
				>
					<span>Read more articles</span>
				</a>
				<div className='article_box_meta'>
					<a
						href='https://dev.to/hidaytrahman/'
						className='article_box_author_link'
						target='_blank'
						rel='noreferrer'
					>
						Dev.to Hidayt Rahman
					</a>
				</div>
			</article>
		</Articles>
	);
}

export default DevToArticles;
