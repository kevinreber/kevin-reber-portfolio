import React from 'react';

const BLOG_POSTS = [
	{
		title: 'Building AI-Powered Applications with React',
		description: 'Lessons learned from integrating LLMs into a production React app at Pixel Studio AI.',
		tags: ['React', 'AI', 'LLMs'],
		link: '#',
	},
	{
		title: 'From Design to Code: A Developer\'s Journey',
		description: 'How my background in design shaped the way I approach frontend engineering.',
		tags: ['Design', 'Career'],
		link: '#',
	},
	{
		title: 'Scaling a Student Platform at Berkeley Skydeck',
		description: 'Technical challenges and solutions from building an ed-tech startup.',
		tags: ['Startup', 'Engineering'],
		link: '#',
	},
];

const BlogSection: React.FC = () => {
	return (
		<>
			<h3 className="section-heading">Writing & Thoughts</h3>
			<div className="blog-grid">
				{BLOG_POSTS.map((post) => (
					<div key={post.title} className="blog-card">
						<h5 className="blog-card-title">{post.title}</h5>
						<p className="blog-card-description">{post.description}</p>
						<div className="blog-tags">
							{post.tags.map((tag) => (
								<span key={tag} className="blog-tag">{tag}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default BlogSection;
