import { useState, useEffect } from 'react';

const useClock = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        let animationFrameId: number;

        const updateClock = () => {
            setTime(new Date());
            animationFrameId = requestAnimationFrame(updateClock);
        };

        updateClock();

        return () => cancelAnimationFrame(animationFrameId); // Cleanup on component unmount
    }, []);

    const formatTime = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
        return date.toLocaleTimeString([], options);
    };

    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {  day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('ru-RU', options).slice(0, -2);
    };

    const getWeekday = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
        return date.toLocaleDateString('ru-RU', options);
    };

    return {
        time,
        formattedTime: formatTime(time),
        formattedDate: formatDate(time),
        weekday: getWeekday(time) // New string for the weekday
    };
};

export default useClock;
