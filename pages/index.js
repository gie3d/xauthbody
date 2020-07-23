import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Head from 'next/head';

const Home = () => {
	const [secretKey, setSecretKey] = useState('');
	const [jsonBody, setJsonBody] = useState('');
	const [authenBody, setAuthenBody] = useState('');

	useEffect(() => {
		try {
			const json = JSON.parse(JSON.stringify(jsonBody));
			const hash = CryptoJS.SHA256(`${JSON.stringify(json)}${secretKey}`);
			setAuthenBody(hash.toString());
		} catch (ex) {
			setAuthenBody('cannot parse json');
		}
	}, [secretKey, jsonBody]);

	const onSecretChange = (e) => {
		setSecretKey(event.target.value);
	};

	const onJsonBodyChange = (e) => {
		setJsonBody(event.target.value);
	};
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="title">Welcome to XAuthBody</h1>

				<p className="description">Build you X Auth Body</p>
				<div style={{ width: '80%', marginTop: 20 }}>
					<div className="columns">
						<div className="column is-12">
							<div className="field">
								<div className="control">
									<input className="input" type="text" placeholder="Secret Key" onChange={onSecretChange} value={secretKey} />
								</div>
							</div>
							<div>
								JSON
								<textarea className="textarea" placeholder="JSON" rows="10" onChange={onJsonBodyChange} value={jsonBody}></textarea>
							</div>
						</div>
					</div>
				</div>
				<br />
				<p>{authenBody}</p>
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by Annonymous
				</a>
			</footer>

			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;

					max-width: 800px;
					margin-top: 3rem;
				}

				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
				}

				.card:hover,
				.card:focus,
				.card:active {
					color: #0070f3;
					border-color: #0070f3;
				}

				.card h3 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
};

export default Home;
