const Offline = () => {
    return <>
        <p>
            Your offline. Try reloading!.
        </p>
        <a onClick={() => location.reload()}>
            Reload
        </a>
    </>;
}

export default Offline;