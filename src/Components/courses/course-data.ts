
export interface Topic {
    title: string;
    content: string;
    image?: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    stack: string;
    image: string;
    duration: string;
    topics?: Topic[];
}

export const COURSES: Course[] = [
    {
        id: 'docker',
        title: 'Docker & Containerization Mastery',
        description: 'Master Docker containers, images, multi-stage builds, and orchestration fundamentals.',
        level: 'Beginner',
        stack: 'DevOps',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80',
        duration: '6 Weeks',
        topics: [
            {
                title: 'Introduction to Docker',
                content: `
                    <h3>What is Docker?</h3>
                    <p>Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.</p>
                    <p>With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.</p>
                    
                    <h4>Why use Docker?</h4>
                    <ul>
                        <li><strong>Fast, consistent delivery of your applications:</strong> Streamlines the development lifecycle by allowing developers to work in standardized environments using local containers which provide your applications and services.</li>
                        <li><strong>Responsive deployment and scaling:</strong> Docker’s container-based platform allows for highly portable workloads. Docker containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.</li>
                        <li><strong>Running more workloads on the same hardware:</strong> Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your compute capacity to achieve your business goals.</li>
                    </ul>
                `,
                image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Docker Architecture',
                content: `
                    <h3>The Docker Architecture</h3>
                    <p>Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers.</p>
                    <p>The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface.</p>
                    
                    <h4>The Docker Daemon</h4>
                    <p>The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.</p>
                    
                    <h4>The Docker Client</h4>
                    <p>The Docker client (docker) is the primary way that many Docker users interact with Docker. When you use commands such as <code>docker run</code>, the client sends these commands to dockerd, which carries them out.</p>
                `,
                image: 'https://images.unsplash.com/photo-1667372393119-c81c0cda0563?auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'Working with Images',
                content: `
                    <h3>Docker Images</h3>
                    <p>An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization. For example, you may build an image that is based on the ubuntu image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.</p>
                    
                    <code>
                        FROM ubuntu:20.04
                        RUN apt-get update && apt-get install -y python3
                        CMD ["python3", "--version"]
                    </code>
                `
            }
        ]
    },
    {
        id: 'dotnet',
        title: 'Deep Dive into .NET 9 Internals',
        description: 'Understand the CLR, Memory Management, and Garbage Collection extensively.',
        level: 'Advanced',
        stack: '.NET Core',
        image: 'https://images.unsplash.com/photo-1629904853716-f004c3756858?auto=format&fit=crop&w=600&q=80',
        duration: '12 Weeks',
        topics: [
            {
                title: 'CLR Fundamentals',
                content: '<p>The Common Language Runtime (CLR) is the execution engine that handles running applications.</p>'
            }
        ]
    },
    {
        id: 'azure',
        title: 'Azure Microservices Architecture',
        description: 'Building scalable, distributed systems using Azure Container Apps and Dapr.',
        level: 'Intermediate',
        stack: 'Azure',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=600&q=80',
        duration: '10 Weeks'
    },
    {
        id: 'kubernetes',
        title: 'Kubernetes for Developers',
        description: 'From Dockerfile to Helm Charts. Practical K8s for application engineers.',
        level: 'Intermediate',
        stack: 'DevOps',
        image: 'https://images.unsplash.com/photo-1667372393119-c81c0cda0563?auto=format&fit=crop&w=600&q=80',
        duration: '8 Weeks'
    },
    {
        id: 'angular',
        title: 'Enterprise Angular Patterns',
        description: 'Nx Monorepos, RxJS State Management, and Module Federation.',
        level: 'Advanced',
        stack: 'Frontend',
        image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80',
        duration: '10 Weeks'
    },
    {
        id: 'system-design',
        title: 'System Design for Tech Leads',
        description: 'Designing high-scale systems. CAP theorem, caching strategies, and sharding.',
        level: 'Advanced',
        stack: 'Architecture',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
        duration: '6 Weeks'
    },
    {
        id: 'sql',
        title: 'SQL Server Performance Tuning',
        description: 'Index optimization, query execution plans, and locking mechanisms.',
        level: 'Advanced',
        stack: 'Database',
        image: 'https://images.unsplash.com/photo-1633419461186-7d7255d9b476?auto=format&fit=crop&w=600&q=80',
        duration: '5 Weeks'
    }
];
