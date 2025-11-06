import React, { useState } from "react";

export default function ImageSlider({ images }) {
    // default images if none provided
    const defaultImages = [
        "https://picsum.photos/id/1015/800/500",
        "https://picsum.photos/id/1016/800/500",
        "https://picsum.photos/id/1018/800/500",
    ];
    const imgs = images && images.length ? images : defaultImages;

    // keep rotation (degrees) per image so rotating one doesn't affect others
    const [index, setIndex] = useState(0);
    const [rotations, setRotations] = useState(() => imgs.map(() => 0));

    const prev = () => setIndex((i) => (i - 1 + imgs.length) % imgs.length);
    const next = () => setIndex((i) => (i + 1) % imgs.length);

    const rotateCurrent = (deg = 90) => {
        setRotations((r) => {
            const copy = [...r];
            copy[index] = (copy[index] + deg) % 360;
            return copy;
        });
    };

    const resetRotation = () => {
        setRotations((r) => {
            const copy = [...r];
            copy[index] = 0;
            return copy;
        });
    };

    const containerStyle = {
        width: 800,
        maxWidth: "100%",
        margin: "24px auto",
        textAlign: "center",
        userSelect: "none",
    };

    const imgWrapperStyle = {
        width: "100%",
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#f4f4f4",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    };

    const imgStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        transition: "transform 300ms ease",
        transform: `rotate(${rotations[index]}deg)`,
    };

    const controlsStyle = {
        marginTop: 12,
        display: "flex",
        gap: 8,
        justifyContent: "center",
    };

    const btnStyle = {
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
    };

    return (
        <div style={containerStyle}>
            <div style={imgWrapperStyle}>
                <img src={imgs[index]} alt={`slide-${index}`} style={imgStyle} />
            </div>

            <div style={controlsStyle}>
                <button style={btnStyle} onClick={prev} aria-label="Previous">
                    ◀ Prev
                </button>

                <button
                    style={btnStyle}
                    onClick={() => rotateCurrent(90)}
                    aria-label="Rotate clockwise"
                >
                    ⟳ Rotate 90°
                </button>

                <button style={btnStyle} onClick={() => rotateCurrent(-90)} aria-label="Rotate counterclockwise">
                    ⟲ Rotate -90°
                </button>

                <button style={btnStyle} onClick={resetRotation} aria-label="Reset rotation">
                    Reset
                </button>

                <button style={btnStyle} onClick={next} aria-label="Next">
                    Next ▶
                </button>
            </div>

            <div style={{ marginTop: 8, color: "#666" }}>
                {index + 1} / {imgs.length} • rotated {rotations[index]}°
            </div>
        </div>
    );
}