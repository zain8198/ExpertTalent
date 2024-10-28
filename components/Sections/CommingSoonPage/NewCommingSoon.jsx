import React, { useState, useEffect } from 'react';

export default function NewComingSoon() {
    const [time, setTime] = useState({
        days: 9,
        hours: 2,
        minutes: 2,
        seconds: 11,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            let { days, hours, minutes, seconds } = time;

            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    seconds = 59;
                    minutes--;
                } else {
                    if (hours > 0) {
                        minutes = 59;
                        seconds = 59;
                        hours--;
                    } else {
                        if (days > 0) {
                            hours = 23;
                            minutes = 59;
                            seconds = 59;
                            days--;
                        } else {
                            clearInterval(timer);
                        }
                    }
                }
            }

            setTime({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            padding: '20px', // added padding for smaller screens
        },
        image: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            zIndex: '-1',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
            background: '#000',
            zIndex: '-1',
            opacity: 0.2,
        },
        header: {
            fontSize: '50px',
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
        },
        p: {
            fontSize: '16px',
            fontWeight: '400',
            color: '#fff',
            maxWidth: '550px',
            textAlign: 'center',
        },
        timeContent: {
            display: 'flex',
            columnGap: '30px',
            alignItems: 'center',
            margin: '2rem',
            border: '1px solid white',
            padding: '2rem 2.5rem',
            borderRadius: '0.5rem',
            background: 'rgba(250, 250, 250, 0.2)',
            flexWrap: 'wrap', // added flex wrap for smaller screens
            justifyContent: 'center', // center items for smaller screens
        },
        time: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        number: {
            fontWeight: '800',
            fontSize: '80px',
            lineHeight: 1,
            color: '#eee',
            '@media (max-width: 768px)': {
                fontSize: '60px', // reduced font size for smaller screens
            },
        },
        text: {
            textTransform: 'capitalize',
            color: '#fff',
            fontWeight: '600',
            fontSize: '12px',
        },
        emailContent: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
        },
        inputBox: {
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            maxWidth: '360px',
            width: '100%',
            marginTop: '20px',
            columnGap: '20px',
        },
        input: {
            height: '100%',
            outline: 'none',
            border: 'none',
            border: '1px solid #fff',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            fontWeight: '400',
            width: '100%',
            padding: '0 15px',
            color: '#fff',
        },
        button: {
            height: '100%',
            cursor: 'pointer',
            backgroundColor: '#eee',
            color: '#0d6a81',
            whiteSpace: 'nowrap',
            padding: '0 20px',
            transition: 'all 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#fff',
        },
    };

    return (
        <section style={styles.container}>
            <img
                src="https://images.unsplash.com/photo-1625558298116-38f0173a522c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                style={styles.image}
            />
            <div style={styles.overlay}></div>
            <header style={styles.header} >Page Is Coming Soon</header>
            <p style={styles.p}>
                We are excited to announce that we will be launching soon and can't wait to
                share our new Page with you.
            </p>
            <div style={styles.timeContent}>
                <div style={{ ...styles.time, ...styles.days }}>
                    <span style={styles.number}>{time.days < 10 ? `0${time.days}` : time.days}</span>
                    <span style={styles.text}>days</span>
                </div>
                <div style={{ ...styles.time, ...styles.hours }}>
                    <span style={styles.number}>{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
                    <span style={styles.text}>hours</span>
                </div>
                <div style={{ ...styles.time, ...styles.minutes }}>
                    <span style={styles.number}>{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
                    <span style={styles.text}>minutes</span>
                </div>
                <div style={{ ...styles.time, ...styles.seconds }}>
                    <span style={styles.number}>{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
                    <span style={styles.text}>seconds</span>
                </div>
            </div>
            <div style={styles.emailContent} className='d-none'>
                <p style={styles.p}>Subscribe now to get the latest updates!</p>
                <div style={styles.inputBox}>
                    <input type="email" placeholder="Enter your email..." style={styles.input} />
                    <button
                        style={{ ...styles.button, ':hover': styles.buttonHover }}
                    >
                        Notify Me
                    </button>
                </div>
            </div>
        </section>
    );
}
