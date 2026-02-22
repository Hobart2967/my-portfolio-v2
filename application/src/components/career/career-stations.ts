import type { CareerStation } from './models/career-station.interface';
import brightFuture from './assets/bright_future.png';
import serviceware from './assets/serviceware.png';
import mauser from './assets/mauser.jpeg';
import mauserDescription from './assets/mauser-description.md?raw';
import greyComputer from './assets/grey-computer.jpeg';
import greyComputerDescription from './assets/grey-computer-description.md?raw';
import trustedshops from './assets/trustedshops.png';
import eufh from './assets/eufh.png';
import eufhDescription from './assets/eufh-description.md?raw';
import belonio from './assets/belonio.png';
import belonioDescription from './assets/belonio-description.md?raw';
import timocom from './assets/timocom.png';
import brightFutureDescription from './assets/bright_future-description.md?raw';
import timocomDescription from './assets/timocom-description.md?raw';
import trustedShopsDescription from './assets/trustedshops-description.md?raw';
import servicewareDescription from './assets/serviceware-description-fullstack.md?raw';
import servicewareDescriptionApprenticeship from './assets/serviceware-description-apprenticeship.md?raw';
import servicewareDescriptionWorkStudent from './assets/serviceware-description-workstudent.md?raw';

export const stations: CareerStation[] = [
	{
		companies: [
			{
				name: 'EA Games',
				url: 'https://www.ea.com/'
			},
			{
				name: 'Bright Future GmbH',
				url: 'https://www.brightfuture.de/'
			}
		],
		job: 'Trainee Developer/Quality Assurance',
		description: brightFutureDescription,
		companyLogo: brightFuture,
		tags: [
			'Testing',
			'Game Development',
			'QA'
		],
		start: {
			month: 6,
			year: 2006
		},
		end: {
			month: 6,
			year: 2006
		}
	},
	{
		companies: [{ name: 'Mauser Group', url: 'https://www.mauserpackaging.com' }],
		job: 'Trainee IT-Administrator',
		description: mauserDescription,
		companyLogo: mauser,
		tags: [
			'Automation',
			'IT Administration',
			'Windows',
			'Linux',
			'Mac',
			'Active Directory',
			'Reporting'
		],
		start: {
			month: 9,
			year: 2007
		},
		end: {
			month: 10,
			year: 2007
		}
	},
	{
		companies: ['Grey Computer Cologne'],
		job: 'PC Manufacturing',
		tags: [
			'PC Building',
			'Hardware',
			'Customer Service',
			'IT Support'
		],
		description: greyComputerDescription,
		companyLogo: greyComputer,
		start: {
			month: 1,
			year: 2010
		},
		end: {
			month: 6,
			year: 2011
		}
	},
	{
		companies: [{ name: 'Serviceware SE', url: 'https://www.serviceware-se.com/' }],
		job: 'Apprenticeship: Computer Science Expert',
		companyLogo: serviceware,
		// See ./assets/serviceware-description-apprenticeship.md for tags
		tags: [
			'Software Development',
			'Quality Assurance',
			'Virtualization',
			'VMWare & HyperV',
			'Microsoft Test Manager & System Center Virtual Machine Manager',
			'ASP.NET',
			'Crystal Reports',
			'IIS, MSMQ, MS SQL Server'
		],
		description: servicewareDescriptionApprenticeship,
		start: {
			month: 7,
			year: 2011
		},
		end: {
			month: 1,
			year: 2014
		}
	},
	{
		companies: [{ name: 'Serviceware SE', url: 'https://www.serviceware-se.com/' }],
		job: 'Work Student: Software Engineer',
		companyLogo: serviceware,
		description: servicewareDescriptionWorkStudent,
		tags: [
			'AngularJS',
			'ASP.NET Web API, WCF & SignalR',
			'Microsoft SQL Server',
			'Azure DevOps',
			'Agile Software Development',
			'Team Foundation Server',
			'Continuous Integration & Delivery',
			'WPF & WinForms',
			'Capacitor/Cordova & Electron',
			'Xamarin'
		],
		start: {
			month: 2,
			year: 2011
		},
		end: {
			month: 9,
			year: 2014
		}
	},
	{
		companies: [{ name: 'EUFH Bruehl', url: 'https://www.eufh.de' }],
		job: 'Bachelor Degree: Business Information Systems',
		companyLogo: eufh,
		description: eufhDescription,
		school: true,
		start: {
			month: 10,
			year: 2011
		},
		end: {
			month: 9,
			year: 2014
		}
	},
	{
		companies: [{ name: 'Serviceware SE', url: 'https://www.serviceware-se.com/' }],
		job: 'Full-Stack Software Engineer',
		tags: [
			'AngularJS',
			'ASP.NET Web API, WCF & SignalR',
			'Microsoft SQL Server',
			'Azure DevOps',
			'Agile Software Development',
			'Team Foundation Server',
			'Continuous Integration & Delivery',
			'WPF & WinForms',
			'Capacitor/Cordova & Electron',
			'Xamarin',
			'MS SQL',
			'Oracle DB'
		],
		companyLogo: serviceware,
		description: servicewareDescription,
		start: {
			month: 10,
			year: 2014
		},
		end: {
			month: 1,
			year: 2018
		}
	},
	{
		companies: [{ name: 'Trusted Shops GmbH', url: 'https://www.trustedshops.de' }],
		job: 'Senior Full-Stack Software Engineer',
		tags: [
			'AWS (Amazon Web Services)',
			'MySQL',
			'Angular',
			'TypeScript',
			'Java',
			'S3',
			'EC2',
			'RDS',
			'Lambda',
			'Docker',
			'React & Preact',
			'VueJs',
			'GraphQL',
			'NodeJs',
			'Keycloak'
		],
		companyLogo: trustedshops,
		description: trustedShopsDescription,
		start: {
			month: 2,
			year: 2018
		},
		end: {
			month: 6,
			year: 2023
		}
	},
	{
		companies: [{ name: 'Belonio GmbH', url: 'https://www.belonio.de' }],
		job: 'Senior Full-Stack Software Engineer',
		tags: [
			'AWS (Amazon Web Services)',
			'Docker',
			'Postgres',
			'Angular',
			'TypeScript',
			'Java',
			'S3',
			'EC2',
			'RDS',
			'Lambda',
			'SQS',
			'ApiGateway',
			'Route53',
			'DynamoDB',
			'CloudFront',
			'CloudWatch',
			'And many more AWS Services'
		],
		companyLogo: belonio,
		css: `
    filter: drop-shadow(0px 0px 10px #fff);
  `,
		description: belonioDescription,
		start: {
			month: 7,
			year: 2023
		},
		end: {
			month: 8,
			year: 2025
		}
	},
	{
		companies: [{ name: 'TIMOCOM GmbH', url: 'https://www.timocom.com' }],
		tags: [
			'Azure',
			'Kubernetes / k8s',
			'Java',
			'React',
			'TypeScript',
			'Keycloak',
			'Postgres',
			'Grafana, Prometheus, OpenTelemetry'
		],
		job: 'Senior Full-Stack Software Engineer',
		companyLogo: timocom,
		css: `
    filter: drop-shadow(0px 0px 10px #fff);
  `,
		description: timocomDescription,
		start: {
			month: 9,
			year: 2025
		},
		end: {
			month: new Date(Date.now())
				.getMonth() + 1,
			year: new Date(Date.now())
				.getFullYear()
		}
	}
];
