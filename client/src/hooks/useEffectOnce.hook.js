import { useEffect } from "react";

/**
 * Streamlines the process of running effects only once when a component mounts.
 * @param {*} effect - The side-effect.
 */
function useEffectOnce(effect) {
    useEffect(effect, []);
}

export default useEffectOnce;