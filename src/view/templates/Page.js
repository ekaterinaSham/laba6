import React from "react";

function Page({ children }) {
    return (
        <>
            <div class="container mt-5">
                <header>
                    <h1>Лаба 6</h1>
                </header>
                {children}
                <footer>
                    &copy; Екатерина Шамышева ИЭ-61м-21 <br />
                </footer>
            </div>
        </>
    );
}

export default Page;
