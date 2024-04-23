import React, { useEffect, useState } from "react";
import { 
    Card, 
    CardBody, 
    CardTitle,
    Row, 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import JoblyApi from "./api";

import './DisplayList.css';

function DisplayJobList({ branch }) {
    
    const [jobs, setJobs] = useState();
    useEffect( () => {
        async function getAllJobs() {
            const boomerang = await JoblyApi.request('jobs');
            
            setJobs(boomerang.jobs)
            
        }
        getAllJobs();
        
    }, [])

    function makeJobDisplayCards(jobs) {
        return jobs?.map( (job) => (
            <div key={job.id} className="col-md-12">
                <Card className="list-card">
                    <CardTitle>{job.title}</CardTitle>
                    <CardBody>
                        <p>Salary: {job.salary}</p>
                        <p>Equity: {(job.equity) ? job.equity : "Not Listed" }</p> 
                        <p>Number of Employees: {job.numEmployees}</p>
                        <Link to={`/companies/${job.companyHandle}`}><button className="btn btn-info">View Company</button></Link>
                    </CardBody>
                </Card>
            </div>
        ))
    }

    return (
        <div>
            <h3>Here are all of the available jobs!</h3>
            <Row>
                {makeJobDisplayCards(jobs)}
            </Row>
        </div>
    )
}

export default DisplayJobList;