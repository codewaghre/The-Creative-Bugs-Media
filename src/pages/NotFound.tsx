
const NotFound = () => {
    return (
        <>
            <main className="main-container">
                <div className="text-center">
                    <p className="status-code bg-red">404</p>
                    <h1 className="title">Page not found</h1>
                    <p className="description">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="action-buttons">
                        <a href="/" className="btn-primary">Go back home</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotFound