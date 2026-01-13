import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container py-8">
            <section className="text-center mb-8">
                <h1 className="mb-4">Calder Russell</h1>
                <h2 className="text-xl font-normal text-secondary">
                    Analysis of Racial Distribution of Mathematics Classes in Cambridge Rindge and Latin School
                </h2>
            </section>

            <section className="card">
                <h3>Description</h3>
                <p>
                    This website serves as a digital portfolio for my senior thesis.
                    Here you will find my proposal, the full thesis document, an annotated bibliography,
                    data analysis, and my personal reflections on the research process.
                </p>
                <p>
                    To view the full thesis, please navigate to the <Link to="/thesis">Thesis</Link> page.
                </p>
            </section>
        </div>
    );
};

export default Home;
