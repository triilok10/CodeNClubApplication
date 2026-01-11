export interface Speaker {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    bio?: string;
}

export interface AgendaItem {
    time: string;
    topic: string;
    description: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    month: string;
    type: string;
    status: string;
    image: string;
    description: string;
    location?: string;
    speakers: Speaker[];
    agenda: AgendaItem[];
    gallery: string[];
}

export const EVENTS: Event[] = [
    {
        id: 'azure-bootcamp',
        date: '12',
        month: 'OCT',
        title: 'Global Azure Bootcamp',
        type: 'Conference',
        status: 'Open',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
        description: 'Experience a day of cloud computing excellence. Our annual bootcamp brings together industry leaders to share insights on Cloud Native, AI integration, and Scalable Architectures.',
        location: 'Bangalore Tech Park / Online',
        speakers: [
            {
                name: 'Dr. Emily Carter',
                role: 'Azure MVP @ Microsoft',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                bio: 'Expert in distributed systems and cloud architecture with 15+ years experience.'
            },
            {
                name: 'Rajiv Malhotra',
                role: 'Head of Cloud, Caffeine.dev',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                bio: 'Building scalable infrastructure for the next generation of developers.'
            }
        ],
        agenda: [
            { time: '09:00 AM', topic: 'Keynote: Future of Cloud', description: 'Exploring Serverless and AI integration in modern stacks.' },
            { time: '11:00 AM', topic: 'Hands-on: AKS Deployment', description: 'Setting up production-ready Kubernetes clusters.' },
            { time: '02:00 PM', topic: 'Scaling for Millions', description: 'Architecting for reliability and performance at scale.' },
            { time: '04:00 PM', topic: 'Networking & Drinks', description: 'Connect with speakers and fellow attendees.' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1475721027187-402ad736574c?auto=format&fit=crop&w=800&q=80'
        ]
    }
];
