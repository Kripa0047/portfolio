import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalDispatchContext, GlobalStateContext, SET_THEME } from "../../store/global_state";
import styles from "./toggle_theme.module.css";

const ToggleTheme = () => {
    const globalState = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);
    const duration = useRef(3000);
    const [message, setMessage] = useState();
    const messageList = [
        "DUDE! WHAT THE FREAK?? I hate light mode",
        "DUDE!!! Stop it",
        "Are you kidding me?",
        "BRO!! Seriously??",
        "Man cut it out...",
        "Don't you have better things to do?",
        "You are a pain in the ass.",
        "Cut it out!! MAN"
    ];
    const index = useRef(0);

    const changeThemeData = () => {
        dispatch({ type: SET_THEME, payload: !globalState.isThemeDark });
    }

    useEffect(() => {
        let newTimer
        if (!globalState.isThemeDark) {
            newTimer = setTimeout(() => {
                if (!globalState.isThemeDark) {
                    changeThemeData();
                    if (duration.current > 300) duration.current -= 300;
                    else duration.current = 300;
                    showMessage();

                }
            }, duration.current);
        }

        return () => clearTimeout(newTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalState]);

    const showMessage = () => {
        if (index.current === messageList.length) return;
        let msg = messageList[index.current];
        index.current += 1;
        let newMessageArr = msg.split(" ");

        setMessage(newMessageArr);

        setTimeout(() => {
            setMessage(null);
        }, newMessageArr.length * 200 + 2000);
    }



    return (
        <React.Fragment>
            <div onClick={changeThemeData}>
                <div className={globalState.isThemeDark ? styles.light : styles.dark}></div>

            </div>
            {message &&
                <div className={styles.messageContainer}>
                    <h1 className={styles.alert}>
                        {message.map((e, i) => <span key={i} className={styles.word} style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>)}
                    </h1>
                </div>
            }
        </React.Fragment>
    );
}

export default ToggleTheme;