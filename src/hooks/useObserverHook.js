import {useEffect, useRef} from "react";

export const useObserverHook = (ref,canLoad ,isLoading, callback) => {

    const observer = useRef()

    useEffect(() => {

        if (isLoading) return;
        if(observer.current) observer.current.disconnect();
        let cb = function (entries, observe) {

            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(cb); // значення записуються до useRef(), щоб між рендерінгом вони не втрачались
        observer.current.observe(ref.current); // потім від нього викликається функція observe(), де передається useRef з тим умовним <div/> видимості

    }, [isLoading]);

}