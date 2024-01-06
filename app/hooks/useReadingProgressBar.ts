import { useEffect, useState } from "react";

export function useReadingProgressBar() {
    const [completion, setCompletion] = useState<number>(0);

    const updateScrollCompletion = () => {
        const actualPosition = window.scrollY; // наша позиция при скроле
        const scrollHeight = document.body.scrollHeight - window.innerHeight; // пространство доступное для прокрутки (общая высота скрола - высота видимого окна)
        const percentage = (actualPosition / scrollHeight) * 100; // процентное значение прокрутки
        setCompletion(percentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollCompletion);
        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }
    }, []);

    return completion;
}