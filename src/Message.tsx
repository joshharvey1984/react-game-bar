function Message() {
    const name = 'Josh';
    if (name)
        return <h1>Hello {name}!</h1>;
    return <h1>Hello, Stranger.</h1>;
}

export default Message;