import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const RandomWord = ({ wordList, intervalDelay }) => {
    const [word, setWord] = useState(wordList[wordList.length - 1]);
    let indexCounter = 0;

    useEffect(() => {
        if (intervalDelay < 2500) {
            throw new Error("[intervalDelay] cannot be less than 2500ms");
        }
        if (wordList.length < 2) {
            throw new Error("[wordList] cannot be less then 2.")
        }

        setInterval(() => {
            startSkillsPuzzler();
        }, intervalDelay)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const startSkillsPuzzler = () => {
        let lastIndex = indexCounter - 1;
        if (lastIndex < 0) lastIndex = wordList.length - 1;
        let presentWord = wordList[lastIndex];
        let newWord = wordList[indexCounter];

        let wordData = [];

        let maxLength = newWord.length > presentWord.length ? newWord.length : presentWord.length;
        const MAX_RAND_INT = 15;
        const MAX_NEGATIVE = 10;
        const MAX_TARGET = 25;

        for (let i = 0; i < maxLength; i++) {
            wordData.push({
                from: presentWord[i] ?? "",
                to: newWord[i] ?? "",
                count: Math.floor(Math.random() * MAX_RAND_INT) - MAX_NEGATIVE,
            });
        }

        const CHAR_LIST = `!#$%&()*+-/<=>?@[]^_{}~abcdefghijklmnopqrstuvwxyz`;
        let timer = setInterval(() => {
            let cancelTimer = true;
            let word = [];
            wordData.forEach((val) => {
                if (val.count === MAX_TARGET) {
                    word.push(val.to);
                } else if (val.count < 0) {
                    cancelTimer = false;
                    val.count += 1;
                    word.push(val.from);
                } else {
                    cancelTimer = false;
                    val.count += 1;
                    word.push(CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)]);
                }
            });

            setWord(word.join(""));

            if (cancelTimer) {
                clearInterval(timer);
            }
        }, 70);


        indexCounter = (indexCounter + 1) % wordList.length;
    }
    return <span>{word}</span>;
}

RandomWord.propTypes = {
    wordList: PropTypes.array.isRequired,
    intervalDelay: PropTypes.number,
}

RandomWord.defaultProps = {
    intervalDelay: 4000,
}

export default RandomWord;