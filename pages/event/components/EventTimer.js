import { Box } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

export default function EventTimer({ eventDate }) {
    const now = moment();
    const date = moment(eventDate).hour(8).minute(30);
    // const [eventTime, setEvetTime] = useState(date.startOf(date))


    const [days, setDays] = useState(moment.duration(date.dayOfYear(), 'days'));
    const [hour, setHour] = useState(moment.duration(date.hour(), 'hours'))
    const [minute, setMinute] = useState(moment.duration(date.minute(), 'minutes'))
    const [second, setSecond] = useState(moment.duration(date.second(), 'seconds'))




    useEffect(() => {
        const timer = setInterval(() => {

            setDays(now.dayOfYear() - moment.duration(date.dayOfYear(), 'days'));
            setHour(moment.duration(date.hour(), 'hours'))
            setMinute(moment.duration(date.minute(), 'minutes'))
            setSecond(moment.duration(date.second(), 'seconds'))


        }, 1000);

        return () => clearInterval(timer);

    }, [])


    return (
        <>
            <Box>{days.asDays()}</Box>
            <Box>{hour.asHours()}</Box>
            <Box>{minute.asMinutes()}</Box>
            <Box>{second.asSeconds()}</Box>
        </>
    )
}
