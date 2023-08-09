import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useShuffle from "../../../hooks/useShuffle";
import testImg from "../../../assets/test.png"

const Test = () => {
    const [sentence, setSentence] = useState({ english: 'He Is A Vary Good Person', bangla: 'তিনি একজন খুভ ভাল মানুষ।' });
    const [shuffleWords, setShuffleWords] = useState([])
    const [makeSentence, setMakeSentence] = useState([])
    // const { shuffleWords } = useShuffle(sentence.english);
    useEffect(() => {
        const arrayOfWords = sentence?.english.split(" ");
        for (let i = arrayOfWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayOfWords[i], arrayOfWords[j]] = [arrayOfWords[j], arrayOfWords[i]]
        }
        setShuffleWords(arrayOfWords)
    }, [sentence])
    const sentenceHandler = (word) => {
        setMakeSentence([...makeSentence, word])
    }
    const wordRemover = (word) => {
        const newWordArray = makeSentence.filter(w => w !== word);
        setMakeSentence(newWordArray)
    }
    const checkHandle = () => {
        window.check_modal.showModal()
    }
    return (
        <section className="py-10 bg-base-300">
            <div className="container overflow-hidden">
                <div data-aos="fade-up">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                        <div className="flex-1" data-aos="fade-right">
                            <img src={testImg} alt="" />
                        </div>
                        <div className="flex-1" data-aos="fade-left">
                            <div className="mb-5">
                                <h1 className="mb-2 text-3xl font-bold uppercase text-primary">Language Test</h1>
                                <p>Translate the sentence Bangla to English.</p>
                            </div>
                            <div className="mb-3">
                                <p><span className="uppercase text-xl font-semibold">Bangla :</span> <span>{sentence.bangla}</span></p>
                            </div>
                            <div className="min-h-16 border-t-2 border-b-2 border-base-content flex flex-wrap gap-2 mb-3">
                                {
                                    makeSentence?.map((word, i) => <button onClick={() => wordRemover(word)} key={i} className="rounded-xl border border-base-content flex justify-center items-center p-2 my-2 md:text-xl font-semibold">{word}</button>)
                                }
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    shuffleWords?.map((word, i) => <button onClick={() => sentenceHandler(word)} key={i} className="rounded-xl border flex justify-center items-center p-2 md:text-xl shadow-md font-semibold hover:-translate-y-1 transition btn" disabled={makeSentence.includes(word)}>{word}</button>)
                                }
                            </div>
                            <div className="text-right mt-5">
                                <button onClick={checkHandle} className="primary-btn" disabled={shuffleWords.length !== makeSentence.length}>Check</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="check_modal" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-3xl text-primary mb-5">{(makeSentence?.join(" ") == sentence.english) ? <span>Wright Answer!</span> : <span>Wrong Answer</span>}</h3>
                    <div className="mb-3">
                        {
                            (makeSentence?.join(" ") == sentence.english) ? <span>WOW! Well done. Practice continuously to more improvement.</span> : <span>Practice more to improve your english.</span>
                        }
                    </div>
                    <div>
                        <p className="text-xl font-semibold">The wright answer is `<span>{sentence.english}</span>`</p>
                    </div>
                </form>
            </dialog>
        </section>
    );
};

export default Test;