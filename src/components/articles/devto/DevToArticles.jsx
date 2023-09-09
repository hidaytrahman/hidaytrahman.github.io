import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Articles } from './DevToArticles.styles';

function DevToArticles() {
	// https://dev.to/api/articles?username=hidaytrahman

	const [articles, setArticles] = useState([]);

	useEffect(() => {
		(async function () {
			const { data } = await axios.get('https://dev.to/api/articles?username=hidaytrahman&per_page=5');
			setArticles(data);
		})();
	}, []);

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

						<time className='article_box_time'>{article.published_at}</time>
					</div>
				</article>
			))}

			<article className='article_box pink'>
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
