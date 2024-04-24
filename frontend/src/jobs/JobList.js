import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';

import Search from "../common/SearchForm";
import JobCardList from "./JobCardList";
import LoadingSpinner from '../common/LoadingSpinner';

/** Show page with list of jobs.
 * 
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 * 
 * JobList -> JobCardList -> JobCard
 * 
 * this is routed to at /jobs
 */

function JobList() {
    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount() {
        search();
    }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <LoadingSpinner />;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <Search searchFor={search} />
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p className="lead">Sorry, no results were found!</p>}
        </div>
    )

}

export default JobList;