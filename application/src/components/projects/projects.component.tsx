import { Project } from "./project.component";

export function Projects() {
  return (
    <div>
      <div class="title">Projects and references</div>
      <div class="projects">
        <Project
          title="avsn.de"
          image="/assets/images/portfolio/avsn.de.png"
          link="https://www.avsn.de"
          techStack={['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'PostNuke']}
        >
          <p>
            avsn.de (short for: adventurespiele.net) is a german news magazine
            about video games. Specifically spoken, it's about adventure video
            games. It offers &gt; 1000 walkthroughs through games, rates &gt; 300
            games in form of reviews and provides almost every kind of material to
            players: Trailers, Screenshots, Patches, Savegames and many more.
          </p>

          <p>
            It also offers a video game database which causes the whole website
            database to be &gt; 150 MB. This part of the website contains data
            about any video game of the genre, including release dates, publisher
            and developer information, runtime requirements, system requirements
            and so on.
          </p>

          <p>
            I am the system administrator of this project and actively develop
            this platform since 2006.
          </p>
        </Project>

        <Project
          title="strawberry-py"
          image="/assets/images/portfolio/strawberry-py.png"
          link="https://www.github.com/Hobart2967/strawberry-py"
          techStack={['Python', 'OpenApi', 'AWS Lambda', 'AWS API Gateway']}
        >
          <p>
            strawberry-py is a rest api framework written by me. It enables
            developers to easily write APIs in a form known from ASP.NET for C# or
            SpringBoot for Java. It uses decorators to declare controllers,
            endpoints and parameters.
          </p>
        </Project>

        <Project
          title="aws-sso-console"
          image="/assets/images/portfolio/aws-sso-console.png"
          link="https://www.github.com/Hobart2967/aws-sso-console"
          techStack={['Electron', 'TypeScript', 'Webpack', 'Amazon Web Services Console']}
        >
          <p>
            The AWS SSO console is a tool for working on multiple AWS accounts at
            the same time, while not having to re-login to another account using
            the SSO login feature.
          </p>

          <p>
            The issue with the usual web console is that you can only use one
            account at one time. Switching accounts - even in a different browser
            tab - causes the old session to invalidate, not being usable anymore.
          </p>

          <p>
            This tool actually creates individual browser session using electron
            browser windows, resulting in having different session instances with
            a unique cookie set. The login and session cookies are being shared
            automatically though, so you do not have to login every time you need
            a new session.
          </p>

          <p>
            This tool was written by me and is available as an electron app for
            Windows (Installer), Linux (Snap) and Mac (pkg). For Mac Users, it
            also supports native window tabs, so there's no need to manage
            multiple windows. They are all grouped into one using tabs. This way,
            you would have the same experience as if you are working in a browser.
          </p>
        </Project>

        <Project
          title="skwid"
          image="/assets/images/portfolio/skwid.png"
          link="https://www.github.com/codewyre/skwid"
          techStack={['Node.js', 'TypeScript', 'Yarn', 'Webpack', 'semantic-release', 'inversify', 'jasmine']}
        >
          <p>
            Skwid aims to be a Makefile replacement and a multi-technology project
            manager at the same time.
          </p>

          <ul>
            <li>
              A modular project configuration, including tasks, variables and
              more.
            </li>
            <li>
              A single definition language, independent from the technology used.
            </li>
            <li>Declarative and documentable definition language.</li>
            <li>Logical Flow Control of your project processes</li>
            <li>Pluggable job system - Missing something? Add it! \o/</li>
          </ul>

          <p>
            This tool was written by me and for now, it is available as an app for
            Mac OS and Linux based Systems only. In the future, I plan to release
            it for Windows, too. It should also be available as chocolatey,
            snap/apt and brew package, without the need to install Node.js
          </p>
        </Project>

        <Project
          title="shoplet"
          image="/assets/images/portfolio/strawberry-py.png"
          link={null}
          techStack={['docker', 'docker-compose', 'LocalStack', 'Terraform', 'solidjs', 'Node.js', 'TypeScript', 'Yarn', 'Vite', 'Open API', 'inversify', 'Keycloak', 'OpenApi', 'tsoa', 'AWS', 'AWS S3', 'AWS DynamoDB', 'AWS Lambda', 'AWS ApiGateway', 'AWS CloudFront', 'AWS CloudWatch', 'AWS SQS', 'AWS Route53', 'AWS ACM', 'AWS SSM', 'AWS RDS']}
        >
          <p>
            Shoplet is a private project of mine with a focus on support small shoplets
          </p>

          <ul>
            <li>
              It is built upon the serverless way of thinking.
            </li>
            <li>
              Except for Keycloak and the relational databases,
              all required tools and services are using serverless services of AWS.
            </li>
            <li>Frontend build with the newcomer framework solidjs</li>
            <li>Docker and docker-compose for local environments</li>
          </ul>

          <p>
            This tool was written by me and for now, it is available as an app for
            Mac OS and Linux based Systems only. In the future, I plan to release
            it for Windows, too. It should also be available as chocolatey,
            snap/apt and brew package, without the need to install Node.js
          </p>
        </Project>
      </div>
    </div>
  );
}
