import styled from 'styled-components';

export const Articles = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 1 rem;
	margin: 1rem;

	.article_box {
		max-width: 400px;
		margin: 0 auto;
		box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
		margin-bottom: 25px;
	}

	.article_box_header_link {
		display: block;
		background: ${({ theme }) => theme.colors.card};
		color: ${({ theme }) => theme.colors.text};
		text-decoration: none;
		padding: 15px;
		font-size: 15px;
		line-height: 1.5em;

		font-weight: normal;
		position: relative;
	}

	.article_box_header_link span::before,
	.article_box_header_link span::after {
		content: '';
	}

	.article_box_header_link span {
		border-bottom: 2px dashed transparent;
		transition: border 0.5s;
	}
	.article_box_header_link:hover span {
		border-bottom-color: rgba(0, 0, 0, 0.25);
	}

	.article_box_meta {
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.text};
		padding: 15px;
		font-size: 14px;
		padding-top: 30px;
		position: relative;
	}

	.article_box_meta::before {
		content: '.';
		display: block;
		font-size: 0;
		border: 0 solid transparent;
		border-top-color: ${({ theme }) => theme.colors.card};
		width: 0;
		height: 0;
		border-width: 15px 15px 0;
		position: absolute;
		top: 0;
	}

	.article_box_author_link {
		color: ${({ theme }) => theme.colors.text};
		text-decoration: none;
		display: block;

		font-weight: bold;
		font-size: 12px;
		margin-bottom: 10px;
	}

	.article_box_time {
		display: block;
		color: ${({ theme }) => theme.colors.text};
		font-style: italic;
		font-size: 11px;
	}

	/***************************/

	.pink .article_box_header_link {
		background: #faa0fa;
	}

	.pink .article_box_meta::before {
		border-top-color: #faa0fa;
	}

	.blue .article_box_header_link {
		background: #9ed5ff;
	}

	.blue .article_box_meta::before {
		border-top-color: #9ed5ff;
	}
`;
