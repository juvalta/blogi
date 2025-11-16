import React from "react";
import Header from "./header";

function BlackHole() {

    const c = 30;
    const g = 6;
    const mass = 10000;
    const rs = (2 * g * mass) / (c * c);

    return (
        <>
            <Header />

            <div style={{ backgroundColor: "lightsteelblue", maxWidth: '80%', height: '80%' }}>

            </div>

            <div className="blackHole" style={{ backgroundColor: 'black', borderRadius: '50%', width: `${1 * rs}px`, height: `${1 * rs}px`, position: 'relative' }}>
                <div className="accretionDisk" style={{
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    width: `${3 * rs}px`,
                    height: `${3 * rs}px`,
                    border: '2px solid gray',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>

                </div>

                <div className="unstable-photon-orbit" style={{
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    width: `${1, 5 * rs}px`,
                    height: `${1, 5 * rs}px`,
                    border: '2px solid orange',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>

                </div>
            </div>

            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: `${i * 10}%`,
                            right: 0,
                            width: '100%',
                            height: '2px',
                            background: 'linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))'
                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default BlackHole