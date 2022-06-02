import { useEffect, useState } from "react";

export default function fetchPost() {
    const [fetchedData, setFetchedData] = useState<object>({})

    useEffect(() => {
        fetch('/manifest.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFetchedData(data)
            })

    }, [])

    return (
        <div/>
    )
}