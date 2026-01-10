
export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    category: 'Full Stack' | 'Frontend' | 'Backend' | 'DevOps' | 'Mobile';
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    githubUrl?: string;
    demoUrl?: string;
    stars: number;
    team: string;
    gallery?: string[];
    longDescription?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 'ecommerce-microservices',
        title: 'E-Commerce Microservices',
        description: 'A full reference architecture for .NET 8 e-commerce systems.',
        tags: ['.NET 8', 'RabbitMQ', 'Docker', 'Redis'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
        category: 'Backend',
        difficulty: 'Advanced',
        stars: 1240,
        team: 'Cloud Native Architects',
        gallery: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80'
        ],
        longDescription: `
            <h3>Architecture Overview</h3>
            <p>This project demonstrates a production-grade microservices architecture using .NET 8. It implements patterns such as Event Sourcing, CQRS, and the Outbox pattern to ensure data consistency across distributed services.</p>
            <ul>
                <li><strong>Identity Service:</strong> Manages authentication using Duende IdentityServer.</li>
                <li><strong>Catalog Service:</strong> Handles product data with MongoDB.</li>
                <li><strong>Ordering Service:</strong> Processes orders using DDD principles and SQL Server.</li>
            </ul>
        `
    },
    {
        id: 'task-manager',
        title: 'TaskFlow SaaS Platform',
        description: 'Multi-tenant task management ecosystem. Real-time updates with SignalR, drag-and-drop Kanban boards, and team collaboration.',
        tags: ['Angular 17', 'Supabase', 'SignalR', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80',
        category: 'Full Stack',
        difficulty: 'Intermediate',
        stars: 850,
        team: 'Productivity Squad',
        gallery: [
            'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80'
        ],
        longDescription: '<p>A scalable SaaS solution for teams.</p>'
    },
    {
        id: 'devhub-cli',
        title: 'DevHub CLI Tool',
        description: 'An open-source CLI for scaffolding enterprise-grade boilerplates. supports Clean Architecture, vertical slice architecture templates.',
        tags: ['C#', 'CLI', 'System.CommandLine'],
        image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80',
        category: 'DevOps',
        difficulty: 'Intermediate',
        stars: 560,
        team: 'Open Source Contributors',
        gallery: [],
        longDescription: '<p>CLI productivity booster.</p>'
    },
    {
        id: 'finance-dashboard',
        title: 'FinTech Analytics Dashboard',
        description: 'High-performance chart visualization for stock markets. Uses WebSockets for live data and D3.js for rendering complex graphs.',
        tags: ['React', 'D3.js', 'WebSockets', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        category: 'Frontend',
        difficulty: 'Advanced',
        stars: 320,
        team: 'Quant Viz Team',
        gallery: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=800&q=80'
        ],
        longDescription: `
            <h3>Real-time Visualization</h3>
            <p>Handling thousands of data points per second requires optimization. This dashboard uses WebSockets for live data ingestion and D3.js for GPU-accelerated rendering.</p>
        `
    },
    {
        id: 'cloud-deployer',
        title: 'Azure Cloud Deployer',
        description: 'Automate your Azure deployments with this Terraform-based solution. Manages AKS, KeyVault, and CosmosDB provision.',
        tags: ['Terraform', 'Azure', 'Bash'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        category: 'DevOps',
        difficulty: 'Advanced',
        stars: 195,
        team: 'DevOps Guild',
        gallery: [],
        longDescription: '<p>Automated infrastructure provisioning.</p>'
    },
    {
        id: 'chat-app',
        title: 'Whisper Real-time Chat',
        description: 'E2E encrypted chat application. Features voice messages, file sharing, and self-destructing messages.',
        tags: ['Vue 3', 'Firebase', 'WebRTC'],
        image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80',
        category: 'Full Stack',
        difficulty: 'Beginner',
        stars: 430,
        team: 'Privacy First',
        gallery: [],
        longDescription: '<p>Secure messaging for everyone.</p>'
    }
];
