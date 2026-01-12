const Thesis = () => {
    return (
        <div className="container py-8">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h1>Full Thesis</h1>
                    <a href="/thesis.pdf" download className="button" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                        Download PDF
                    </a>
                </div>

                <div className="pdf-container" style={{ height: '80vh', minHeight: '600px', border: '1px solid var(--color-border)' }}>
                    <iframe
                        src="/thesis.pdf"
                        title="Senior Thesis PDF"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    >
                        <p>
                            Your browser does not support PDFs.
                            <a href="/thesis.pdf">Download the PDF</a> to view it: <a href="/thesis.pdf">Download PDF</a>.
                        </p>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Thesis;
