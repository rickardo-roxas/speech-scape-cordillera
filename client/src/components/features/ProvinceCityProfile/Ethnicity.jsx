// Libraries and dependencies
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Components and styles
import SectionTitle from './SectionTitle';
import styles from './Ethnicity.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Ethnicity component that visualizes a breakdown of ethnic groups
 * using a doughnut chart, alongside a custom color-coded legend.
 *
 * @param {object} props - Component props
 * @param {Array} props.ethnicGroups - Array of ethnic group data
 * @param {string} props.ethnicGroups[].ethnic_group_name - Name of the ethnic group
 * @param {string|number} props.ethnicGroups[].percentage - Percentage representation of the group
 * @returns {JSX.Element} - Rendered Ethnicity chart and legend
 */
function Ethnicity({ ethnicGroups }) {
	const data = {
		labels: ethnicGroups.map(g => g.ethnic_group_name),
		datasets: [{
			data: ethnicGroups.map(g => parseFloat(g.percentage)),
			backgroundColor: [
				'#004D00',
				'#00C853',
				'#1B5E20',
				'#66BB6A',
				'#009688',
				'#A5D6A7',
				'#2E7D32',
				'#8BC34A',
			  ],
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