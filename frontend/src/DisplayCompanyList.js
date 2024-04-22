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

function DisplayCompanyList({ branch }) {
    
    const [entries, setEntries] = useState();
    useEffect( () => {
        async function getEntries() {
            const boomerang = await JoblyApi.request('companies');
            
            setEntries(boomerang.companies)
            
        }
        getEntries();
        console.log('entries is ', entries);
    }, [])

    function makeCompanyDisplayCards(entries) {
        let cards;
        // if (branch === "companies") {
            return entries?.map( (entry) => (
                <div key={entry.handle} className="col-md-12">
                    <Card className="list-card">
                        <CardTitle>{entry.name}</CardTitle>
                        <CardBody>
                            <p>Description: {entry.description}</p>
                            <p>Number of Employees: {entry.numEmployees}</p>
                            <Link to={`/companies/${entry.handle}`}><button className="btn btn-info">View Company</button></Link>
                        </CardBody>
                    </Card>
                </div>
            ))
        //}
    }

    function makeJobDisplayCards(entries) {
        return entries?.map( (entry) => {
            <div key={entry.id} className="col-md-12">
                <Card className="list-card">
                    <CardTitle>{entry.title}</CardTitle>
                    <CardBody>
                        <p>Salary: {entry.salary}</p>
                        <p>Equity: {(entry.equity) ? entry.equity : "Not Listed" }</p> 
                        <p>Number of Employees: {entry.numEmployees}</p>
                        <Link to={`/companies/${entry.companyHandle}`}><button className="btn btn-info">View Company</button></Link>
                    </CardBody>
                </Card>
            </div>
        })
    }

    return (
        <div>
            <h3>Here are all of the available companies</h3>
            <Row>
                {makeCompanyDisplayCards(entries)}
            </Row>
        </div>
    )
}

export default DisplayCompanyList;