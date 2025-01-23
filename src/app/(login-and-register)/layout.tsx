import React from "react";

export default function LoginAndRegisterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex: 2, padding: "20px" }}>
                {/* Logo and Name */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://placehold.co/28x28" alt="Logo" style={{ width: "28px", height: "28px" }} />
                    <h1>Logotype</h1>
                </div>

                {/* Main Content */}
                <div style={{ flex: 2, padding: "20px" }}>
                    {children}
                </div>
            </div>
            

            {/* Feature */}
            <div style={{ flex: 1, backgroundColor: "rgba(240, 240, 240, 1)", padding: "20px" }}>
                <h2>Feature Section</h2>
                <p>Details about the feature...</p>
            </div>
        </div>
    );
}