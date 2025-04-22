import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import SectionTitle from './SectionTitle';
import styles from './Ethnicity.module.css';

function Ethnicity({ ethnicGroups }) {
    const data = {
        labels: ethnicGroups.map(g => g.ethnic_group_name),
        datasets: [{
            data: ethnicGroups.map(g => parseFloat(g.percentage)),
            backgroundColor: ['#8FCDA1', '#7AA787', '#457B54', '#2E6E3A', '#283B0B', '#001707'],
        }],
    };

    return (
        <div className={styles.ethnicity}>
            <SectionTitle title="Ethnic Groups" />
            <Doughnut data={data} />
        </div>
    );
}

export default Ethnicity;