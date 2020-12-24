import React from 'react';

import ProjectList from '../ProjectList/ProjectList';

type Props = {
	setModalProject: (project: object) => void;
};

const Projects: React.FC<Props> = ({ setModalProject }) => {
	return <ProjectList setModalProject={setModalProject} />;
};

export default Projects;
