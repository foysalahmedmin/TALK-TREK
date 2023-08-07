
const useShuffle = (str) => {
    const arrayOfWords = str.split(" ") ;
    for (let i = arrayOfWords.length - 1; i > 0; i --){
        const j = Math.floor(Math.random() * (i + 1));
        [arrayOfWords[i], arrayOfWords[j]] = [arrayOfWords[j], arrayOfWords[i]]
    }
    return {shuffleWords : arrayOfWords} ; 
};

export default useShuffle;