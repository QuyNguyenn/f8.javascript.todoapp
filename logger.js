export default function logger(reducer) {
    return (state, action, args) => {
        console.group(action);
        const prevState = state;
        console.log('Action', action);
        console.log('Arguments', args);
        console.log('PrevState', prevState);

        const nextState = reducer(state, action, args);
        console.log('NextState', nextState);
        console.groupEnd();

        return nextState;
    }
}