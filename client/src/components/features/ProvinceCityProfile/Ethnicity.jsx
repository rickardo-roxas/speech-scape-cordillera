import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import SectionTitle from './SectionTitle';
import styles from './Ethnicity.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Ethnicity({ ethnicGroups }) {
	const data = {
		labels: ethnicGroups.map(g => g.ethnic_group_name),
		datasets: [{
			data: ethnicGroups.map(g => parseFloat(g.percentage)),
			backgroundColor: ['#8FCDA1', '#A1C94E', '#457B54', '#2E6E3A', '#283B0B', '#001707'],
			borderColor: '#fff',
			borderWidth: 2
		}],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		cutout: '60%',
		plugins: {
			legend: {
				display: false
			}
		}
	};

	return (
		<div>
			<SectionTitle title="Ethnic Groups" />
			<div className={styles.ethnicity}>
				<div className={styles.chartContainer}>
					<Doughnut data={data} options={options} />
				</div>
				<div className={styles.legendContainer}>
					{ethnicGroups.map((g, idx) => (
						<div key={g.ethnic_group_name} className={styles.legendItem}>
							<div
								className={styles.colorSwatch}
								style={{ backgroundColor: data.datasets[0].backgroundColor[idx] }}
							/>
							<span>{g.ethnic_group_name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Ethnicity;
