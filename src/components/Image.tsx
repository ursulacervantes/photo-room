import React  from "react";

export default function Image({ image }: { image: string }): JSX.Element {
    // [ToDo] Needs a better alt text
    return (
        <img src={image} alt="image uploaded" />
    )
}