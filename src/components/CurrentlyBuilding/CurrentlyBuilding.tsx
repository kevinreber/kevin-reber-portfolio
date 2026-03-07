import React from 'react';

const CURRENT_PROJECTS = [
	{
		name: 'Pixel Studio AI',
		description: 'Expanding AI-powered content generation with new model integrations and community features.',
		status: 'Active',
	},
	{
		name: 'Open Source Contributions',
		description: 'Contributing to developer tools and React ecosystem projects.',
		status: 'Ongoing',
	},
	{
		name: 'Learning Rust',
		description: 'Exploring systems programming and building CLI tools with Rust.',
		status: 'Learning',
	},
];

const CurrentlyBuilding: React.FC = () => {
	return (
		<>
			<h3 className="section-heading">Currently Building</h3>
			<div className="currently-building-grid">
				{CURRENT_PROJECTS.map((project) => (
					<div key={project.name} className="building-card">
						<div className="building-card-header">
							<span className="building-status">{project.status}</span>
							<h5 className="building-title">{project.name}</h5>
						</div>
						<p className="building-description">{project.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default CurrentlyBuilding;
