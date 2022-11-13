class AnimatedCounter extends HTMLElement{
    constructor(){
        super()

        this.duration = parseInt(this.dataset.duration);
    }

    setState(num){
        let start = parseInt(this.dataset.value);
        let end = num;
        let startTimestamp = null;
        let duration = this.duration;
        console.log(duration)
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            this.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
            window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
        this.dataset.value = num
    }
}

customElements.define('animated-counter',AnimatedCounter);