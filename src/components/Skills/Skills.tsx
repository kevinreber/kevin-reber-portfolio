import React from 'react';

// data
import generatedProjects from '../../generated/projects.json';
import { STACK } from '../../data';

type GeneratedProject = { tech?: string[] };

/**
 * STACK is the claim (what Kevin would defend); projects.json is the evidence.
 * Rendering only the intersection means the list can't drift into naming
 * something no shipped project uses, and can't pull in a project's incidental
 * dependencies either. Order follows STACK, not the project data.
 */
const resolveStack = (projects: GeneratedProject[]) => {
	const used = new Set<string>();
	projects.forEach((project) => {
		(project.tech ?? []).forEach((tech) => used.add(tech));
	});

	return STACK.filter((tech) => used.has(tech));
};

const Skills: React.FC = () => {
	const stack = resolveStack(generatedProjects as GeneratedProject[]);

	return (
		<>
			<h3 className="section-heading">Stack</h3>
			<p className="stack-intro">
				What I reach for most. Every one of these is used by a project above.
			</p>

			<ul className="stack-tags">
				{stack.map((tech) => (
					<li key={tech} className="stack-tag">
						{tech}
					</li>
				))}
			</ul>
		</>
	);
};

export default Skills;
