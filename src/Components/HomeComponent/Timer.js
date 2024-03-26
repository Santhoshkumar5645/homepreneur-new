import React, { useEffect, useState } from 'react'
import TimerBox from '../../Element/TimerBox'
import { getTimeLeft } from '../../Utility';

function Timer(props) {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(props.date));

    useEffect(() => {
        console.log()

		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(props.date));
		}, 1000);

		return () => {
			clearInterval(timer);
		};

	}, []);

  return (
    <div className='w-4/5 py-10 flex gap-x-5 justify-center lg:justify-start xl:justify-start items-center'>
        <TimerBox value={timeLeft.days} title={'days'}/>
        <TimerBox value={timeLeft.hours} title={'minutes'}/>
        <TimerBox value={timeLeft.minutes} title={'hours'}/>
        <TimerBox value={timeLeft.seconds} title={'seconds'}/>

    </div>
  )
}

export default Timer