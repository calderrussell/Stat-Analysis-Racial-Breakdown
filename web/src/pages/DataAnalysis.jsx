import raceBarGraph from '../assets/Race_bar_graph.png';
import inequitiesRacePies from '../assets/inequities_race_pies_append.png';
import leastEquitableDepartmentPie from '../assets/least_equitable_department_pie.png';
import mathEnrollmentChart from '../assets/math_enrollment_chart.png';

const DataAnalysis = () => {
    return (
        <div className="container py-8">
            <div className="card">
                <h1>Data Analysis</h1>
                <div className="content">
                    <h3>Important Figures and Methods of Analysis</h3>
                    
                    <div style={{ marginBottom: '2rem' }}>
                        <h4>Race Distribution Bar Graph</h4>
                        <img 
                            src={raceBarGraph} 
                            alt="Race distribution bar graph" 
                            style={{ maxWidth: '100%', height: 'auto', marginTop: '1rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4>Inequities by Race</h4>
                        <img 
                            src={inequitiesRacePies} 
                            alt="Inequities by race pie charts" 
                            style={{ maxWidth: '100%', height: 'auto', marginTop: '1rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4>Least Equitable Department Analysis</h4>
                        <img 
                            src={leastEquitableDepartmentPie} 
                            alt="Least equitable department pie chart" 
                            style={{ maxWidth: '100%', height: 'auto', marginTop: '1rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4>Math Enrollment Chart</h4>
                        <img 
                            src={mathEnrollmentChart} 
                            alt="Math enrollment chart" 
                            style={{ maxWidth: '100%', height: 'auto', marginTop: '1rem' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataAnalysis;
