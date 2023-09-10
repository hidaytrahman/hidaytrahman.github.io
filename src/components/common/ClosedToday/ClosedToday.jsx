import React from 'react';
import { ClosedTodayContainer } from './ClosedToday.styles';

function ClosedToday() {
	return (
		<ClosedTodayContainer>
			<div className='main-wrapper'>
				<div className='signboard-wrapper'>
					<div className='signboard'>
						CLOSED
						<br />
					</div>
					<div className='sg'>We are closed today</div>
					<div className='string'></div>
					<div className='pin pin1'></div>
					<div className='pin pin2'></div>
					<div className='pin pin3'></div>
				</div>
			</div>
		</ClosedTodayContainer>
	);
}

export default ClosedToday;
