const Thesis = () => {
    return (
        <div className="container py-8">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h1>Full Thesis</h1>
                    <a href="/CalderGradThesis.pdf" download className="button" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                        Download PDF
                    </a>
                </div>

                <div className="pdf-container" style={{ height: '80vh', minHeight: '600px', border: '1px solid var(--color-border)' }}>
                    <embed
                        src="/CalderGradThesis.pdf#toolbar=1&navpanes=1&scrollbar=1"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    />
                    <div style={{ padding: '1rem', textAlign: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
                        <p>
                            If the PDF doesn't display above, {' '}
                            <a href="/CalderGradThesis.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
                                click here to open it in a new tab
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thesis;
