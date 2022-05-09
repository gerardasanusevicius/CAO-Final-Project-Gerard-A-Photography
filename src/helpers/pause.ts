const pause = (ms: number) => new Promise<void>((res) => { setTimeout(() => res(), ms); });

export default pause;
