import styled from 'styled-components';

export const ClosedTodayContainer = styled.div`
	.main-wrapper {
		font-size: 15vmin;
		/*background-color: #ffffff;*/

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.signboard-wrapper {
		width: 200px;
		height: 100px;
		margin: 20px;
		position: relative;
		flex-shrink: 0;
		transform-origin: center 2.5vmin;
		animation: 1000ms init forwards, 1000ms init-sign-move ease-out 1000ms, 3000ms sign-move 2000ms infinite;
	}
	.signboard-wrapper .signboard {
		color: #ffffff;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-size: 20px;
		background-color: #2558ff;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		border-radius: 4vmin;
		text-shadow: 0 -0.015em #be2b00;
		box-shadow: 0 2vmin 4vmin 1vmin rgba(107, 107, 107, 0.8);
	}
	.signboard-wrapper .sg {
		color: #ffffff;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-size: 15px;
		line-height: 2px;
		width: 100%;
		height: 10vmin;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		border-radius: 4vmin;
		text-shadow: 0 -0.015em #be2b00;
		margin-bottom: 5px;
	}
	.signboard-wrapper .sg {
		color: #ffffff;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		line-height: 2px;
		width: 100%;
		height: 10vmin;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		border-radius: 4vmin;
		text-shadow: 0 -0.015em #be2b00;
		margin-bottom: 5px;
	}

	.signboard-wrapper .sg1 {
		color: #ffffff;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		line-height: 30px;
		width: 100%;
		height: 10vmin;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		border-radius: 4vmin;
		text-shadow: 0 -0.015em #be2b00;
		margin-bottom: 0px;
	}
	.signboard-wrapper .string {
		width: 30vmin;
		height: 30vmin;
		border: solid 0.9vmin #020089;
		border-bottom: none;
		border-right: none;
		position: absolute;
		left: 50%;
		transform-origin: top left;
		transform: rotate(45deg);
	}
	.signboard-wrapper .pin {
		width: 5vmin;
		height: 5vmin;
		position: absolute;
		border-radius: 50%;
	}
	.signboard-wrapper .pin.pin1 {
		background-color: #9f9f9f;
		top: 0;
		left: calc(50% - 2.5vmin);
	}
	.signboard-wrapper .pin.pin2,
	.signboard-wrapper .pin.pin3 {
		background-color: #000ed8;
		top: 21.5vmin;
	}
	.signboard-wrapper .pin.pin2 {
		left: 13vmin;
	}
	.signboard-wrapper .pin.pin3 {
		right: 13vmin;
	}

	@keyframes init {
		0% {
			transform: scale(0);
		}
		40% {
			transform: scale(1.1);
		}
		60% {
			transform: scale(0.9);
		}
		80% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes init-sign-move {
		100% {
			transform: rotate(3deg);
		}
	}
	@keyframes sign-move {
		0% {
			transform: rotate(3deg);
		}
		50% {
			transform: rotate(-3deg);
		}
		100% {
			transform: rotate(3deg);
		}
	}
`;
