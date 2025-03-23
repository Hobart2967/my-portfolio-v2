import type { SkillTree } from './models/skill-tree.model';

export const skills: SkillTree = {
	id: 'me',
	name: 'My personal skills',
	vx: 0,
	vy: 0,
	vz: 0,
	children: [
		{
			id: 'methods',
			name: 'Methods',
			vx: 50,
			vz: 0,
			collapsed: false,
			children: [
				{
					id: 'scrum',
					name: 'Scrum'
				},
				{
					id: 'kanban',
					name: 'Kanban'
				}
			]
		},
		{
			id: 'backend',
			name: 'Backend Development',
			vx: 50,
			vy: 50,
			vz: 0,
			collapsed: false,
			children: [
				{
					id: 'asp',
					name: 'ASP.NET MVC'
				},
				{
					id: 'asp-rest',
					name: 'ASP.NET REST'
				},
				{
					id: 'express',
					name: 'express.js REST Apis'
				},
				{
					id: 'node-backends',
					name: 'Node.js Backends & CLIs'
				}
			]
		},
		{
			id: 'dbs',
			name: 'Managing data',
			children: [
				{
					id: 'dbsys',
					name: 'Database Systems',
					children: [
						{
							name: 'MySQL / MariaDB',
							id: 'MySQL'
						},
						{
							name: 'Dynamodb',
							id: 'Dynamodb'
						},
						{
							name: 'Mongodb',
							id: 'Mongodb'
						},
						{
							name: 'Oracle',
							id: 'oracle'
						},
						{
							name: 'Sqlite3',
							id: 'sqlite3'
						},
						{
							name: 'MS SQL',
							id: 'mssql'
						}
					]
				},
				{
					id: 'MessageQs',
					name: 'Message Queues',
					children: [{
						id: 'MSMQ',
						name: 'Microsoft Message Queueing'
					}]
				},
				{
					id: 'graphql',
					name: 'GraphQL (Basics)'
				}
			]
		},
		{
			id: 'devops',
			name: 'Infrastructure / DevOps',
			vx: 50,
			vz: 0,
			collapsed: false,
			children: [
				{
					id: 'os',
					name: 'Operating Systems',
					children: [
						{
							id: 'mac',
							name: 'Mac OS'
						},
						{
							id: 'windows',
							name: 'Windows'
						},
						{
							id: 'linux',
							name: 'Linux (Debian, Ubuntu, SuSE, etc.)'
						}
					]
				},
				{
					id: 'webservers',
					name: 'Web Servers',
					children: [
						{
							id: 'apache',
							name: 'Apache Httpd & Apache2'
						},
						{
							id: 'nginx',
							name: 'nginx'
						},
						{
							id: 'iis',
							name: 'IIS'
						}
					]
				},
				{
					id: 'docker',
					name: 'Docker & Docker Compose'
				},
				{
					id: 'aws',
					name: 'Amazon Web Services (AWS)',
					children: [
						{
							id: 's3',
							name: 'S3'
						},
						{
							id: 'apigw',
							name: 'ApiGateway'
						},
						{
							id: 'cloudwatch',
							name: 'CloudWatch'
						},
						{
							id: 'lambda',
							name: 'Lambda'
						},
						{
							id: 'dynamodb',
							name: 'Dynamodb'
						}
					]
				}
			]
		},
		{
			id: 'general',
			name: 'General',
			vz: 0,
			collapsed: false,
			children: [
				{
					id: 'languages',
					name: 'Languages',
					children: [
						{
							id: 'german',
							name: 'German (Mother tongue)'
						},
						{
							id: 'english',
							name: 'English (C1)'
						},
						{
							id: 'dutch',
							name: 'Dutch (A2)'
						}
					]
				},
				{
					id: 'architecture',
					name: 'Software Architecture'
				},
				{
					id: 'ausbilderschein',
					name: 'Instructors Certificate (AEVO, IHK Cologne)'
				},
				{
					id: 'programming-languages',
					name: 'Programming & Script languages',
					children: [
						{
							id: 'csharp',
							name: 'C#'
						},
						{
							id: 'js',
							name: 'JavaScript'
						},
						{
							id: 'java',
							name: 'Java'
						},
						{
							id: 'ts',
							name: 'TypeScript'
						},
						{
							id: 'cpp',
							name: 'C++'
						},
						{
							id: 'vb',
							name: 'Visual Basic'
						},
						{
							id: 'python',
							name: 'Python'
						},
						{
							id: 'delphi',
							name: 'Delphi'
						},
						{
							id: 'php',
							name: 'PHP'
						}
					]
				},
				{
					id: 'vcs',
					name: 'Version Control Systems',
					children: [
						{
							id: 'git',
							name: 'Git'
						},
						{
							id: 'tfs',
							name: 'Team Foundation Server'
						}
					]
				},
				{
					id: 'frameworks',
					name: 'Frameworks and Libraries',
					children: [
						{
							id: 'dotnetcore',
							name: 'DotNet Core'
						},
						{
							id: 'dotnet',
							name: '.NET'
						},
						{
							id: 'mono',
							name: 'Mono C#'
						},
						{
							id: 'node',
							name: 'NodeJs'
						}
					]
				}
			]
		},
		{
			id: 'frontend',
			name: 'Frontend Development',
			vx: 50,
			vz: 0,
			vy: 50,
			collapsed: false,
			children: [
				{
					id: 'mobile',
					name: 'Mobile Development',
					children: [
						{
							id: 'android',
							name: 'Android App Development'
						},
						{
							id: 'ios-hybrid',
							name: 'Hybrid iOS App Development with Apache Cordova'
						},
						{
							id: 'ios-android',
							name: 'Hybrid Android App Development with Apache Cordova'
						}
					]
				},
				{
					id: 'desktop',
					name: 'Desktop Development',
					children: [
						{
							id: 'winforms',
							name: 'Native Windows - Windows Forms'
						},
						{
							id: 'wpf',
							name: 'Native Windows - WPF & C#'
						},
						{
							id: 'gambas',
							name: 'Native Linux - Gambas & Visual Basic'
						},
						{
							id: 'desktop-hybrid',
							name: 'Hybrid Desktop Clients with Electron'
						}
					]
				},
				{
					id: 'web',
					name: 'Web Development',
					children: [
						{
							id: 'webpack',
							name: 'Webpack'
						},
						{
							id: 'webcomponents',
							name: 'Web Components (Isolated and pluggable)'
						},
						{
							id: 'ng',
							name: 'Angular & angular.js',
							children: [
								{
									id: 'ssr',
									name: 'Server-Side Rendering'
								},
								{
									id: 'csr',
									name: 'Client-Side Rendering'
								}
							]
						},
						{
							id: 'vue',
							name: 'VueJS'
						},
						{
							id: 'react',
							name: 'React / Preact'
						},
						{
							id: 'wordpress',
							name: 'Wordpress'
						},
						{
							id: 'joomla',
							name: 'Joomla'
						}
					]
				}
			]
		}
	]
};
